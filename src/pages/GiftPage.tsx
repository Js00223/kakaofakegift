import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const giftMap: Record<string, { name: string; image: string }> = {
  iphone16: { name: "아이폰 16 프로 맥스 1TB", image: "/assets/iphone.png" },
  macbook: { name: "맥북 프로 M4 16인치", image: "/assets/macbook.png" },
  airpods: { name: "에어팟 맥스 2세대", image: "/assets/airpods.png" },
};

export default function GiftPage() {
  const { giftId } = useParams();
  const [params] = useSearchParams();
  const name = params.get("name") || "친구";
  const gift = giftMap[giftId || "iphone16"];
  const [isPrank, setIsPrank] = useState(false);

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("YOUR_KAKAO_JAVASCRIPT_KEY");
    }
    setTimeout(() => {
      setIsPrank(true);
    }, 3000);
  }, []);

  const handleShare = () => {
    const url = window.location.href;
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "선물이 도착했어요 🎁",
          description: "장난 선물을 확인해보세요!",
          imageUrl: window.location.origin + gift.image,
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
        },
        buttons: [
          {
            title: "선물 확인하기",
            link: {
              webUrl: url,
              mobileWebUrl: url,
            },
          },
        ],
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-pink-50">
      <img src={gift.image} alt={gift.name} className="w-40 mb-6" />
      <h1 className="text-xl font-bold mb-2">{decodeURIComponent(name)}님에게</h1>
      <p className="mb-4 text-gray-600">{gift.name} 선물이 도착했어요!</p>
      {!isPrank ? (
        <p className="text-sm text-gray-500">선물 정보를 불러오는 중...</p>
      ) : (
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-lg font-bold text-red-500">🎉 짜잔! 낚시였군요!</h2>
          <p className="text-sm text-gray-600 mt-2">친구가 보낸 장난 선물입니다 😂</p>
        </div>
      )}
      <button onClick={handleShare} className="mt-4 text-blue-500 underline">
        카카오톡으로 공유하기
      </button>
    </div>
  );
}
