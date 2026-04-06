import { useState } from "react";
import { encryptData } from "../../utils/encrypt";
import api from "../../api/axios";
import { toast } from "react-toastify";

import ComplaintsTable from "./ComplaintsTable";
import DescriptionModal from "../modals/DescriptionModal";
import UpdateStatusModal from "../modals/UpdateStatusModal";
import ConfirmDialog from "../modals/ConfirmDialog";
import { useOutletContext } from "react-router-dom";

export default function ComplaintsManager({ complaints, isAuthority }) {
  const [descOpen, setDescOpen] = useState(false);
  const [description, setDescription] = useState("");

  const [updateOpen, setUpdateOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [pendingStatus, setPendingStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const { updateComplaint } = useOutletContext();

  const handleView = (desc) => {
    setDescription(desc);
    setDescOpen(true);
  };

  const handleUpdateClick = (complaint) => {
    setSelectedComplaint(complaint);
    setUpdateOpen(true);
  };

  const handleRequestSave = (status) => {
    setPendingStatus(status);
    setConfirmOpen(true);
  };

  const handleConfirmSave = async () => {
    setLoading(true);
    try {
      const encrypted = encryptData({ status: pendingStatus });

      const res = await api.put(
        `/complaint/${selectedComplaint._id}`,
        { payload: encrypted }
      );

      updateComplaint(res?.data?.complaint);
      toast.success("Status updated successfully ✅");
      setUpdateOpen(false);
    } catch {
      toast.error("Update failed ❌");
    } finally {
      setLoading(false);
      setConfirmOpen(false);
    }
  };

  return (
    <>
      <ComplaintsTable
        complaints={complaints}
        isAuthority={isAuthority}
        onViewDescription={handleView}
        onStatusUpdate={handleUpdateClick}
      />

      <DescriptionModal
        open={descOpen}
        description={description}
        onClose={() => setDescOpen(false)}
      />

      <UpdateStatusModal
        open={updateOpen}
        complaint={selectedComplaint}
        loading={loading}
        onClose={() => setUpdateOpen(false)}
        onRequestSave={handleRequestSave}
      />

      <ConfirmDialog
        open={confirmOpen}
        message="Do you really want to update the complaint status?"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={handleConfirmSave}
      />
    </>
  );
}
