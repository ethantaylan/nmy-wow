import { MdDangerous } from "react-icons/md";
import { useAppSelector } from "../../redux/store";
import { supabase } from "../../supabase";

export const Admin = () => {
  const user = useAppSelector(({ user }) => user);

  const useName = useAppSelector(({ user }) => user.user?.user_metadata.name);

  const loginAsAdmin = async () => {
    supabase.auth.signInWithOAuth({
      provider: "discord",
      options: { redirectTo: "http://localhost:5173/admin/roster" },
    });
  };

  if (user.isAdmin) {
    return (
      <div className="flex flex-col items-center pt-10 justify-center w-screen">
        <MdDangerous className="text-red-600" size={150} />
        <p className="text-3xl">You are not allowed to see this page</p>
        <div className="mt-10 flex items-center justify-center btn">
          <span onClick={loginAsAdmin}>Login first</span>
        </div>
        <span className="mt-5">Contact</span>
      </div>
    );
  }

  return (
    <div className="w-screen flex justify-center pt-10">
      <p>
        Welcome on administration page
        <span className="text-red-600 font-semibold ms-1">{useName}</span>
      </p>
    </div>
  );
};
