import { useState } from "react";
import AdminForm from "./AdminForm";

const Dashboard = () => {
  const [modelOpen, setModelOpen] = useState(true);
  return (
    <div>
      <AdminForm
        open={modelOpen}
        onClose={() => {
          setModelOpen(false);
        }}
      />
    </div>
  );
};

export default Dashboard;
