import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const giftMap: Record<string, { name: string; image: string }> = {
  iphone16: { name: "아이폰 16 프로 맥스 1TB", image: "/assets/iphone.png" },
  macbook: { name: "맥북 프로 M4 16인치", image: "/assets/macbook.png" },
  airpods: { name: "에어팟 맥스 2세대", image: "/assets/airpods.png" },
};

export default function SendPage() {
  const [params] = useSearchParams();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const giftId = params.get("gift") || "iphone16";
  const gift = giftMap[giftId];

  const handleSend = () => {
    if (name.trim()) {
      navigate(`/gift/${giftId}?name=${encodeURIComponent(name)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <img src={gift.image} alt={gift.name} className="w-32 mb-4" />
      <h2 className="text-lg font-bold mb-2">{gift.name}</h2>
      <input
        type="text"
        placeholder="받는 사람 이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-4 py-2 rounded-full w-64 text-center mb-4"
      />
      <button
        onClick={handleSend}
        className="bg-yellow-400 text-white rounded-full px-6 py-3 font-semibold hover:bg-yellow-500 transition"
      >
        선물 링크 생성 🎁
      </button>
    </div>
  );
}
