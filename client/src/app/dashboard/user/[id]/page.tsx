import { api } from "@/lib/Constants";

type Props = {
  params: {
    id: string;
  };
};

const ProfilePage = async (props: Props) => {
  try {

    const response = await api.get(`/user/${props.params.id}`);

    const user = response.data;

    return (
      <div className="m-2 border rounded shadow overflow-hidden">
        <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600 text-center">
          User Profile
        </div>

        <div className="grid grid-cols-2  p-2 gap-2">
          <p className="p-2 text-slate-400">Name:</p>
          <p className="p-2 text-slate-950">{user.usename}</p>
          <p className="p-2 text-slate-400">Email:</p>
          <p className="p-2 text-slate-950">{user.email}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return <div>Error fetching user profile.</div>;
  }
};

export default ProfilePage;
