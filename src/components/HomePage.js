import React, { useEffect } from "react";

function HomePage(props) {
//   const config = {
//     rootMargin: "0px 0px 0px 0px",
//     threshold: 0,
//   };

  useEffect(() => {
    let observer = new window.IntersectionObserver(function (entries, self) {
        console.log(entries, 'entries')

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImges(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, );
    const images = document.querySelectorAll("[data-src]");
    images.forEach((img) => {
      observer.observe(img);
    });

  }, []);

  function loadImges(image) {
    image.src = image.dataset.src;
  }

  return (
    <div>
      <div
        style={{
          margin: "33px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <img
          style={{ width: "80%", margin: "30px" }}
          src={"/images/image1.jpg"}
          alt="image1"
        />

        <p>
          By the advent of the reign of Emperor Jahangir, king Durjan Shah had
          come to power in Chota Nagpur. He refused to pay the annual revenue
          fixed by Akbar. Jahangir ordered Ibrahim Khan (governor of Bihar) to
          attack Khukhra. Jahangir's intentions were two-pronged: defeat Durjan
          Shah and acquire the diamonds found in the Sankh River. In 1615 AD,
          Ibrahim Khan marched against Khukhra and defeated Durjan Shah, took
          him as a captive to Patna, and was finally imprisoned in the Gwalior
          fort. The imprisonment lasted for twelve years. Ultimately, Jahangir
          granted his release after realising Sal's skill of distinguishing real
          diamonds. The title of Shah was conferred on him by Emperor Jahangir
          and his kingdom restored. Durjan Shah shifted the capital from
          Khukhragarh to Doisa, also known as Navratangarh. The reign of Durjan
          Sal lasted for about thirteen years. He died in 1639 or 1640 AD.[20]
          He was succeeded by King Ram Shah ruled from 1640 to 1663. He built
          Kapilnath Temple in 1643. He succeeded by his son Raghunath Shah.
          Thakur Ani Nath Shahdeo bulit Jagannath temple of Ranchi in 1991. [21]
          The present structure of the Palamau Fort was built in the 17th
          century CE. Daud Khan, who launched his invasion on 3 April 1660 from
          Patna, attacked south of Gaya district and finally arrived at the
          Palamu forts on 9 December 1660. The terms of surrender and payment of
          tribute were not acceptable to the Cheros; Daud Khan apparently wanted
          complete conversion of the Hindus to Islam. Following this, Khan
          mounted a series of attacks on the forts. Cheros defended the forts
          but ultimately lost and fled to the jungles. The temples were
          destroyed and Mughal rule was re-imposed.[23] In 1765, the region came
          under the control of the British East India Company when Chitrajeet
          Rai's nephew, Gopal Rai, betrayed him and facilitated the Patna
          council of the East India Company to attack the fort. When the new
          fort was attacked by Captain Camac on 28 January 1771, the Chero
          soldiers fought valiantly but had to retreat to the old fort on
          account of water shortage. This helped the British army to occupy the
          new fort located on a hill without any struggle. The location was
          strategic and enabled the British to mount cannon-supported attacks on
          the old fort. The Cheros fought valiantly with their own cannons but
          the old fort was besieged by the British on 19 March 1771.[25] The
          fort was finally occupied by the British in 1772. The regions of
          Nagvansh and Ramgarh also became parts of British Raj.[26] The
          Kharagdiha kingdom, which was founded in 15th century when the
          Maharaja of Bhumihar clan was able to influence and impress the
          ghatwals of Kharagdiha Gadis, also came under the British Raj. After
          the Treaty of Allahabad, this region, along with the rest of Suba
          Bengal, came under the rule of East India Company. The kingdom was
          considerably reduced. In 1809, the Maharajas of Kharagdiha became the
          Rajas of Dhanwar. The Kharagdiha gadis were semi-independent
          chiefdoms. Captain Camac found the rulers of these gadis very
          prominent in their chiefdoms, and as a result, these gadis were
          permanently settled as zamindari estates. Koderma, Gadi Palganj and
          Ledo Gadi were notable zamindari estates in the district.[27]
        </p>

        <img
          style={{ width: "80%", margin: "30px" }}
          src={""}
          data-src={"/images/image2.jpg"}
          alt="image2"
        />
        <img
          style={{ width: "80%", margin: "30px" }}
          src={""}
          data-src={"/images/image3.jpg"}
          alt="image3"
        />
        
      </div>
    </div>
  );
}

export default HomePage;
