import "./app.css";
import MainBtn from "./components/main-btn/main-btn";
import Navbar from "./components/navbar/navbar";
import header_img from "./assets/header-img.png";
import { ReactComponent as Arrow } from "./assets/arrow.svg";

import ins_img_1 from "./assets/ins-imgs/img1.png";
import ins_img_2 from "./assets/ins-imgs/img2.png";
import ins_img_3 from "./assets/ins-imgs/img3.png";
import ins_img_4 from "./assets/ins-imgs/img4.png";
import ins_img_5 from "./assets/ins-imgs/img5.png";
import ins_img_6 from "./assets/ins-imgs/img6.png";

import scx_img_1 from "./assets/scan-x/img11.svg";
import scx_img_2 from "./assets/scan-x/img22.svg";
import scx_img_3 from "./assets/scan-x/img3.svg";

import roadm from "./assets/roadmap-img.png";

import { ReactComponent as WidgetImg } from "./assets/widget-img.svg";
import qr from "./assets/qr.png";
import { useRef } from "react";

function App() {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };

  const handleScroll = (section) => {
    if (sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="page_wrapper">
      <Navbar handleScroll={handleScroll} />

      <section>
        <div className="main_header">
          <h1>
            Эффективный <span>Telegram</span> скринер криптовалют
          </h1>
          <p>
            Делаем анализ криптовалюты более эффективным <br />и находим сигналы
            для успешных инвестиций.
          </p>
          <div className="dfaic">
            <MainBtn text="Начать сейчас" />
          </div>
          <div className="dfaic">
            <img className="header_img" src={header_img} alt="" />
          </div>
        </div>
      </section>

      <section ref={sectionRefs.section1}>
        <div className="section_title">
          <h2>Инструменты Scan -x</h2>
          <p>
            Позволяют одним нажатием отбирать монеты, которые могут быть <br />
            интересны для внутридневной торговли.
          </p>
        </div>
        <div className="instr_cards">
          <div className="inst_card">
            <div className="inst_card_title">
              <div>
                <h4>Топ лидеров роста за 24 часа</h4>
                <Arrow />
              </div>
              <p>
                Знайте, какие монеты показали наибольший рост за последние 24
                часа.
              </p>
            </div>
            <img className="inst_card_img" src={ins_img_1} alt="" />
          </div>
          <div className="inst_card inst_card_s">
            <div className="inst_card_title">
              <div>
                <h4>Топ лидеров падения за 24 часа</h4>
                <Arrow />
              </div>
              <p>
                Знайте, какие монеты показали наибольшее падение за последние 24
                часа.
              </p>
            </div>
            <img className="inst_card_img" src={ins_img_2} alt="" />
          </div>
          <div className="inst_card">
            <div className="inst_card_title">
              <div>
                <h4 className="secondary_t">Монеты увеличившиеся в объеме за 24 часа </h4>
                <Arrow />
              </div>
              <p>
                Откройте для себя монеты с наибольшим увеличением объема торгов
                за последние 24 часа.
              </p>
            </div>
            <img className="inst_card_img" src={ins_img_3} alt="" />
          </div>
          <div className="inst_card inst_card_s">
            <div className="inst_card_title">
              <div>
                <h4>Самые волатильные монеты за 24 часа</h4>
                <Arrow />
              </div>
              <p>
                Просматривайте список монет с наибольшей волатильностью за
                последние 24 часа.
              </p>
            </div>
            <img className="inst_card_img" src={ins_img_4} alt="" />
          </div>
          <div className="inst_card">
            <div className="inst_card_title">
              <div>
                <h4>Монеты вблизи значений ATH</h4>
                <Arrow />
              </div>
              <p>
                Знайте, какие монеты находятся вблизи максимальных своих
                значений.
              </p>
            </div>
            <img className="inst_card_img" src={ins_img_5} alt="" />
          </div>
          <div className="inst_card inst_card_s">
            <div className="inst_card_title">
              <div>
                <h4>Монеты вблизи значений ATL</h4>
                <Arrow />
              </div>
              <p>
                Узнайте, какие монеты находятся вблизи минимальных своих
                значений.
              </p>
            </div>
            <img className="inst_card_img" src={ins_img_6} alt="" />
          </div>
        </div>
      </section>

      <section ref={sectionRefs.section2}>
        <div className="section_title">
          <h2>Сигналы от Scan-x</h2>
          <p>
            Получайте мгновенно актуальные торговые сигналы <br /> и
            рекомендации по криптовалютам
          </p>
        </div>
        <div className="scanx_cards">
          <div className="scanx_card">
            <h4>Сигналы Scan-x</h4>
            <img src={scx_img_1} alt="" />
            <p>
              Будьте в курсе всех событий на рынке и оперативно реагируйте на
              изменения.
            </p>
          </div>
          <div className="scanx_card">
            <h4>Рекомендации от Scan-x</h4>
            <img src={scx_img_2} alt="" />
            <p>
              Используя большой объём данных, мы проводим анализ рынка и
              предоставляем рекомендации для покупки или продажи, учитывая
              новостной фон, колебания цен, текущий интерес участников и объём
              торгов в криптовалюте.
            </p>
          </div>
          <div className="scanx_card">
            <h4>Новости</h4>
            <img src={scx_img_3} alt="" />
            <p>
              Мы отслеживаем все важные события в мире криптовалют, чтобы вы
              были в курсе изменений, которые могут повлиять на стоимость ваших
              активов.
            </p>
          </div>
        </div>
      </section>

      <section ref={sectionRefs.section3}>
        <div className="section_title">
          <h2>Дорожная карта</h2>
        </div>
        <div className="roadmap_wrapper">
          <div className="roadmap_left">
            <div className="roadmap_card roadmap_card_sec">
              <div>
                <h5>Скоро</h5>
                <h3>Mini apps Scan-x</h3>
                <p>
                  Наша цель заключается в объединении всех сигналов и
                  инструментов в одном месте, чтобы сделать ваше взаимодействие
                  с сервисом более эффективным и приятным.
                </p>
              </div>

              <img src={roadm} alt="" />
            </div>
            <div className="roadmap_card mb0">
              <h5>Скоро</h5>
              <h3>Веб терминал Scan-x</h3>
              <p>
                В трейдинге ключевым фактором успеха является умение быстро
                реагировать и принимать обоснованные решения в ответ на
                изменения рынка. Для облегчения этой задачи мы разрабатываем
                веб-терминал Scan-X.
              </p>
            </div>
          </div>
          <div className="roadmap_right">
            <div className="roadmap_card">
              <h5>Скоро</h5>
              <h3>Автоматическая торговля</h3>
              <p>
                Автоматическая торговля с использованием инструментов Scan-x.
                Настройте свои предпочтительные параметры для входа в сделки,
                включая открытый интерес, уровни ликвидации, увеличение объема
                торгов, а также тренды, такие как памп или дамп.
              </p>
            </div>
            <div className="roadmap_card mb0">
              <h5>Скоро</h5>
              <h3>Настраиваемые алерты</h3>
              <p>
                Мы стремимся к тому, чтобы вы максимально эффективно
                использовали Scan-X и всегда оставались в курсе важных для вас
                сигналов. Настраивайте алерты по всем рынкам и получайте
                мгновенные уведомления о событиях, которые действительно имеют
                значение для вас.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="widget">
          <div className="widget_text">
            <p>
              Используйте <br /> Scan-x <span>чтобы быть на шаг впереди.</span>
            </p>
            <MainBtn text="Начать сейчас" />
          </div>
          <div className="widget_img">
            <WidgetImg />
          </div>
          <div className="qr">
            <img src={qr} alt="" />
            <p>
              Отсканируйте QR-код для <br />
              быстрого старта
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
