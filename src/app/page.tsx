import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpg" // ← ここを実際の画像名に変更
          alt="旅行イメージ"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* 中央のキャッチコピー */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold">
          安心安全の<br />海外国内拠点
        </h1>
        <p className="text-lg sm:text-2xl mt-4">
          世界各地でお客様の安心で快適な旅をサポートします。
        </p>
      </div>

      {/* ナビゲーションバー */}
      <nav className="absolute top-0 left-0 w-full bg-white bg-opacity-80 shadow-md py-4">
        <ul className="flex justify-center space-x-6 text-sm sm:text-lg font-semibold">
          <li><a href="#" className="hover:text-gray-500">海外旅行トップ</a></li>
          <li><a href="#" className="hover:text-gray-500">海外ツアー</a></li>
          <li><a href="#" className="hover:text-gray-500">海外航空券</a></li>
          <li><a href="#" className="hover:text-gray-500">海外ホテル</a></li>
          <li><a href="#" className="hover:text-gray-500">国内旅行トップ</a></li>
        </ul>
      </nav>

      {/* Page Top ボタン */}
      <div className="absolute bottom-5 right-5">
        <button className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition">
          🛫 Page Top
        </button>
      </div>
    </div>
  );
}
