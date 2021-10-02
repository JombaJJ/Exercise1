import React from "react";
import SideSection from './SideSection';
import MainSection from './MainSection';
import MainSection2 from "./MainSection2";

const MainSectionData = [
    {
      news: 'Rokkia joka säällä',
      maintopic: 'Musiikki',
      picture: 'Rokkibändi'
    },
  
  ]
  const MainSectionData2 = [
    {
      news: 'Töihin hakevat yhä vähemmän ihmisiä',
      maintopic: 'Työpaikka',
      picture: 'Töissä'
    }
  ]
  
  const SideSectionData = [
    {
      sidetitle: 'Urheilu',
      sidebody: 'Ihmiset urheilevat'
    },
    {
      sidetitle: 'Kuolema',
      sidebody: 'Jokainen tupakoitsija kuolee'
    },
    {
      sidetitle: 'Tietokone',
      sidebody: 'Tietokoneet pyörivät sähköllä'
    },
    {
      sidetitle: 'Kasvusto',
      sidebody: 'Vihreät puut meinaavat kesää'
    },
    {
      sidetitle: 'Fobat',
      sidebody: 'Nettipoliisi Fobba etsii Ylilaudan kiusaajia'
    },
    {
      sidetitle: 'Australia',
      sidebody: 'Metsäpalot polttavat kenguruita Ausseis :D'
    }
  ]

export default function News() {

    return (
            
      <div className={'uutiset'}>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{display:'flex', flexDirection:'column'}}>
      {
        MainSectionData.map(element =>  <MainSection data={element} />)
      }
      {
        MainSectionData2.map(element => <MainSection2 data={element} />)
      }
      
      </div>
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{fontSize:'30px', fontWeight:'700', paddingTop:'10px', paddingLeft:'20px', backgroundColor:'white', marginLeft:'15px', marginRight:'250px'}}>
          Luetuimmat</div>
      {
        SideSectionData.map(element =>  <SideSection data={element} />)
      }
      </div>
      </div>
      </div>
    )
}