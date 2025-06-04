import { useNavigate } from "react-router-dom";

const giftItems = [
  {
    id: "iphone16",
    name: "아이폰 16 프로 맥스 1TB",
    image: "/assets/iphone.png",
  },
  {
    id: "macbook",
    name: "맥북 프로 M4 16인치",
    image: "/assets/macbook.png",
  },
  {
    id: "airpods",
    name: "에어팟 맥스 2세대",
    image: "/assets/airpods.png",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="p-6 min-h-screen bg-yellow-50">
      <h1 className="text-xl font-bold mb-4 text-center">🎁 선물을 선택하세요</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
        {giftItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:scale-105 transition"
            onClick={() => navigate(`/send?gift=${item.id}`)}
          >
            <img src={item.image} alt={item.name} className="w-32 mx-auto mb-3" />
            <p className="text-center font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
