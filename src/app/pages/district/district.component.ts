import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-district',
  standalone: true,
  imports: [SlicePipe,RouterLink],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent {
  districts:any=[
    {
      id:1,
      title: "Thiruvananthapuram" ,
      image:"https://images.unsplash.com/photo-1614090699960-b4c81be49f3c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhpcnV2YW5hbnRoYXB1cmFtfGVufDB8fDB8fHww",
      discription:"Thiruvananthapuram ( or Trivandrum) is the capital of the southern Indian state of Kerala. It's distinguished by its British colonial architecture and many art galleries. It’s also home to Kuthira Malika (or Puthen Malika) Palace, adorned with carved horses and displaying collections related to the Travancore royal family, whose regional capital was here from the 18th–20th centuries."
      
      
    },
    {
      id:2,
      title: "Ernakulam" ,
      image:"https://c8.alamy.com/comp/2ETA5YJ/road-marker-for-fort-kochi-cochin-jew-town-ernakulam-in-kerala-india-written-in-english-malayalam-2ETA5YJ.jpg",
      discription:"Sprawling, residential Ernakulam is known for Marine Drive, a busy waterfront promenade where boats offer backwater cruises. The Kerala Folklore and Hill Palace museums explore local heritage through art and antiquities. Shops along Broadway and on MG Road sell fabrics, crafts, and spices, while modern Lulu Mall also has a cinema and an ice rink. Simple eateries serve Keralan specialties and South Indian seafood."
    },
    {
      id:3,
      title: "Alappuzha" ,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvz3X_e_vRSwsHWh0lj9_V9qHiDFSCfiVVA&usqp=CAU",
      discription:"Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design. Punnamada Lake's snake boat races are a well-known annual event."
    },
    {
      id:4,
      title: "Kollam" ,
      image:"https://img.onmanorama.com/content/dam/mm/en/travel/travel-news/images/2023/5/7/kollam-entry-to-sambranikodi.jpg",
      discription:"Kollam is a city in the state of Kerala, on India's Malabar Coast. It’s known as a trade hub and for its beaches, like lively Kollam and secluded Thirumullavaram. Sardar Vallabhbhai Patel Police Museum has artifacts tracing the history of the police force. Nearby, Ashtamudi Lake is a gateway to the Kerala backwaters, a network of waterways rich with vegetation. The striped 1902 Tangasseri Lighthouse has ocean views."
    },
    {
      id:5,
      title: "Pathanamthitta" ,
      image:"https://www.soosi.co.in/cdn/shop/products/AK1-AMS3523-V1_59f6412b-6b7e-44eb-abbb-ab4ac3c24809_1024x1024@2x.jpg?v=1571711091",
      discription:"Pathanamthitta, is a municipality situated in the Southern Kerala, India, spread over an area of 23.50 km². It is the administrative capital of Pathanamthitta district. The town has a population of 37,538."
    },
    {
      id:6,
      title: "Idukki" ,
      image:"https://sassbharath.org/wp-content/uploads/2020/08/panchalimedu.jpg",
      discription:"Idukki district is a densely forested, mountainous region in the south Indian state of Kerala. In the north, Anamudi mountain towers over Eravikulam National Park, where the rare, blue Neelakurinji flower blooms every 12 years. Nearby, Munnar is a hill station known for its sprawling tea plantations and Tea Museum. Farther south is the vast, curved Idukki Dam and Periyar National Park, a tiger and elephant reserve."
    },
    {
      id:7,
      title: "Thrissur" ,
      image:"https://www.holidify.com/images/attr_square/3783.jpg",
      discription:"Thrissur is a city in the south Indian state of Kerala. It's known for sacred sites and colorful festivals. In the center is Vadakkumnathan Temple, dedicated to Lord Shiva and adorned with murals. The ornate, Indo-Gothic Our Lady of Dolours Basilica is nearby. To the north, Thiruvambady Temple is home to several elephants. Sakthan Thampuran Palace houses an archaeology museum with bronze statues and ancient coins."
    },
    {
      id:8,
      title: "Palakkad" ,
      image:"https://hblimg.mmtcdn.com/content/hubble/img/palakkad/mmt/activities/m_activities_palakkad_palakkad_fort_l_367_549.jpg",
      discription:"Palakkad, or Palghat, is a city in Kerala, a state in southwestern India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds. North, on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the famous Ratholsavam chariot festival. Northeast, near Malampuzha Dam, the town of Malampuzha has a rock garden created from recycled materials."
    },
    {
      id:9,
      title: "Malappuram" ,
      image:"https://a.travel-assets.com/findyours-php/viewfinder/images/res70/101000/101683-Malappuram-District.jpg",
      discription:"Malappuram is a city and the headquarters of the Malappuram district in Kerala, India. It is the 4th largest urban agglomeration in Kerala and the 20th largest in India and a city in the Indian state of Kerala, spread over an area of 158.20 km² including the surrounding suburban areas."
    },
    {
      id:10,
      title: "Kozhikode" ,
      image:"https://mir-s3-cdn-cf.behance.net/projects/404/aecbb4165011085.Y3JvcCw0NDU4LDM0ODcsMjA3NCww.jpg",
      discription:"Kozhikode is a coastal city in the south Indian state of Kerala. It was a significant spice trade center and is close to Kappad Beach, where Portuguese explorer Vasco da Gama landed in 1498. The central Kozhikode Beach, overlooked by an old lighthouse, is a popular spot for watching the sunset. Inland, tree-lined Mananchira Square, with its musical fountain, surrounds the massive Mananchira Tank, an artificial pond."
    },
    {
      id:11,
      title: "Wayanad" ,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/800px-Blue%2C_Green_%26_White.jpg",
      discription:"Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets. In the Ambukuthi Hills to the south, Edakkal Caves contain ancient petroglyphs, some dating back to the Neolithic age."
    }
  ];

}
