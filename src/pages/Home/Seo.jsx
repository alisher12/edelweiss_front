import React from 'react';
import img1 from '../../img/Home/img-12.jpg'
const Seo = () => {
  return (
    <section className='seo'>
      <div className="container">
        <div className="seo__text">
          <div className="seo__start">
            <p>За последние несколько лет рынок топовых пк сильно изменился. Появились новейшие высокопроизводительные видеокарты GeForce RTX Super компании Nvidia. Революционная технология трассировки лучей в режиме реального времени, использование алгоритмов искусственного интеллекта и методов машинного обучения значительно приблизили визуализацию картинки к оригиналу.</p>
            <p>Системы получили громадную прибавку скорости. FPS в ресурсоёмких приложениях на разрешении 4K+ и ультра настройках уверенно перешагнул отметку 100. Мы делаем именно такие решения.</p>
            <p>Графические карты в тандеме с новейшими 8-24 ядерными процессорами intel Core i9 с тактовой частотой 5000 Ghz, превращают современные игровые компьютеры в функциональный мультимедийный центр..</p>
            <p>Происходящее на экране поражает реалистичностью и высочайшей детализацией картинки. Шикарный звук, моментальная загрузка программ с использованием SSD дисков, уникальный дизайн, синхронизация RGB подсветки, эффективная система водяного или воздушного охлаждения и возможность модификация системы, характерные черты современный ПК.</p>
            <div className="signature">
              <div className="signature__start">
                <p className='signature__position'>Генеральный директор</p>
                <p className='signature__name'>Асанбеков Алишер</p>
              </div>
              <div className="signature__end">
                Тут подпись
              </div>
            </div>
          </div>
          <div className="seo__end">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seo;
