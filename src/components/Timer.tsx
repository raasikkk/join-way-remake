import { useState, useEffect } from "react";
// import { months, weekdays } from "../constants/date";

const Timer = () => {
  const calculateFutureDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 10);
    return today;
  };

  const futureDate = calculateFutureDate();
  const futureTime = futureDate.getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getRemainingTime = () => {
    const today = new Date().getTime();
    const t = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    const days = Math.floor(t / oneDay);
    const hours = Math.floor((t % oneDay) / oneHour);
    const minutes = Math.floor((t % oneHour) / oneMinute);
    const seconds = Math.floor((t % oneMinute) / 1000);

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    getRemainingTime();

    const countdown = setInterval(getRemainingTime, 1000);

    return () => clearInterval(countdown);
  }, []);

  const format = (item: number) => (item < 10 ? `0${item}` : item.toString());

  return (
    <>
      <section className="timer mt-[200px]">
        <h1 className="xs:text-[25.34px] sm:text-[28.34px] md:text-[35.34px] lg:text-[42.34px] font-bold dark:text-j-yellow text-j-blue text-center hiddenYEl ">
          Супер-скидка На Все Услуги
        </h1>
        <h2 className="mt-[20px] max-w-[500px] mx-auto sm:text-[15.34px] md:text-[18.34px] lg:text-[22.34px] font-medium dark:text-j-yellow text-j-blue text-center hiddenYEl">
          Улучшите свой онлайн-образ с нами и получите отличную цену
        </h2>
        {/* <!-- Deadline Timer --> */}
        <div className="deadline mt-[30px] flex justify-center flex-wrap gap-[20px] hiddenYEl">
          <div className="deadline-format relative w-[179px]" id="days">
            <img
              className="absolute max-w-[179px] animate-spin-slow"
              src="/days-circle.png"
              alt=""
            />
            <h3 className="">{format(timeLeft.days)}</h3>
            <span className="span">Дней</span>
          </div>
          <div className="deadline-format relative w-[179px]" id="days">
            <img
              className="absolute max-w-[179px] animate-spin-slow"
              src="/hours-circle.png"
              alt=""
            />
            <h3 className="">{format(timeLeft.hours)}</h3>
            <span className="span">Часов</span>
          </div>
          <div className="deadline-format relative w-[179px]" id="days">
            <img
              className="absolute max-w-[179px] animate-spin-slow"
              src="/minutes-circle.png"
              alt=""
            />
            <h3 className="">{format(timeLeft.minutes)}</h3>
            <span className="span">Минут</span>
          </div>
          <div className="deadline-format relative w-[179px]" id="days">
            <img
              className="absolute max-w-[179px] animate-spin-slow"
              src="/seconds-circle.png"
              alt=""
            />
            <h3 className="">{format(timeLeft.seconds)}</h3>
            <span className="span">Секунд</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timer;