import { useNavigate } from "react-router";

useNavigate;

const ReturnBtn = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="max-w-[1200px] mx-auto mt-10 px-4">
      <button
        onClick={handleNavigate}
        className="rounded border w-[5rem] hover:bg-gray-200/100"
      >
        back
      </button>
    </div>
  );
};

export default ReturnBtn;
