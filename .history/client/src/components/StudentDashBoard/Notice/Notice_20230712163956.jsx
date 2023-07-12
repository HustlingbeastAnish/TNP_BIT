import React from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import Notifications from "../Notifications/Notifications";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
function Notice() {
  const navigate = useNavigate();
  const callSlogin = async () => {
    try {
      const res = await fetch("https://tnpbitmesra.onrender.com/afterslogin", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      context.setUser(data);
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      navigate("/loginstudent");
      console.log(err);
    }
  };
  useEffect(() => {
    callSlogin();
  }, []);
  return (
    <div className="bg-gray-900 h-auto">
      <div>
        <div>
          <StudentNavbar />
        </div>
        <div className="mt-5">
          <Notifications />
        </div>
        <div>
          <BottomDrawer />
        </div>
      </div>
    </div>
  );
}

export default Notice;
