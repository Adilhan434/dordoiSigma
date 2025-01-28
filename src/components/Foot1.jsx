import React from 'react';
import Logo from '../../public/img/blue_3885_bekturmarlen_1_660_437.jpg'
const NewsCard = ({ image, title, date, link }) => (
  <div className="flex items-center space-x-4 py-2 border-b border-gray-200">
    <img src={image} alt={title} className="w-12 h-12 rounded-md" />
    <div>
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-500">{date}</p>
      <a href={link} className="text-blue-500 text-xs underline">
        Подробнее...
      </a>
    </div>
  </div>
);

const App = () => {
  const news = [
    {
      image: 'https://fc-dordoi.kg/cache/mod_yt_content_slideshowiii/images/blue_3885_bekturmarlen_1_660_437.jpg',
      title: 'Спасибо Бектур и Марлен!',
      date: '18.01.2025',
      link: '#',
    },
    {
      image: 'https://fc-dordoi.kg/images/stories/3883_bekberdinov_1.jpg',
      title: 'Добро пожаловать, Мирлан!',
      date: '18.07.2022',
      link: '#',
    },
    {
      image: 'https://fc-dordoi.kg/images/stories/3880_pobeda_1.jpg',
      title: '«Дордой-2015» побеждает в Зимнем Кубке!',
      date: '14.07.2022',
      link: '#',
    },
    {
      image: 'https://fc-dordoi.kg/images/stories/3879_shumeyko_1.jpg',
      title: 'Добро пожаловать, Камолиддин!',
      date: '29.06.2022',
      link: '#',
    },
    {
      image: 'https://fc-dordoi.kg/images/stories/3875_sydykov_1.jpg',
      title: 'С Днем рождения, Руслан Джумабаевич',
      date: '15.06.2022',
      link: '#',
    },
    {
      image: 'https://fc-dordoi.kg/images/stories/3874_atay_1.jpg',
      title: 'Рахмат, Атай',
      date: '03.06.2022',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-white-900 text-white p-6">
      <h1 className="text-black font-black text-4xl	ml-[150px] mb-4">Последние новости</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Card */}
        <div className="md:col-span-2 bg-white-700 p-6 rounded-lg ">
          <div className="flex flex-col items-center text-center">
            <div className="flex space-x-4">
              <img
                src="https://fc-dordoi.kg/cache/mod_yt_content_slideshowiii/images/blue_3885_bekturmarlen_1_660_437.jpg"
                alt="Player 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h2 className="text-3xl font-bold mt-[-70px]">Чон Рахмат</h2>
            <p className="text-lg mt-[-10px]">Спасибо, Бектур и Марлен!</p>
          </div>
        </div>

        {/* News List */}
        <div className="bg-white-700 text-black p-4 ml-[-50px] rounded-lg shadow-md">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              image={item.image}
              title={item.title}
              date={item.date}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;