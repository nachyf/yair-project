import { Restaurant }from '../models/restaurant.model'


export class RestaurantService{

  // public restArray:Restaurant[] = new Array<Restaurant>();
   
  constructor(){
   
  }
  

public getOneProduct(id:number):Restaurant{
        let Restaurants = this.getRestuarents();
        return Restaurants.find(p=>p.restID == id);
}


   public getRestuarents():Restaurant[]{
  
          let Restaurants = new Array<Restaurant>();
        Restaurants.push(new Restaurant(1,"סושי רחביה", "דגים", "עמק רפאים 48, ירושלים", Math.floor(4544575*Math.random()),'https://www.leaders.co.il/wp-content/uploads/2017/06/SPICEL_VEGI-_%D7%A4%D7%95%D7%A7%D7%99%D7%9E%D7%95%D7%9F.jpg')); 
        Restaurants.push(new Restaurant(2, "בלו הל מיוסיק", "בר", "יואל משה סלומון 12, ירושלים", Math.floor(4543675*Math.random()),'https://www.itravelisrael.co.il/Userfiles/images/Businesses/26923/business26923_571573.jpg'));
        Restaurants.push(new Restaurant(3, "תרזה",  "איטלקי","סינמה סיטי ירושלים", Math.floor(4547565*Math.random()),'https://tereza.co.il/wp-content/uploads/2015/12/AAD_2869.jpg'));
        Restaurants.push(new Restaurant(4, "פומפידו", "חלבי", "עמק רפאים 27, ירושלים",Math.floor(4876675*Math.random()),'https://www.itraveljerusalem.com/wp-content/uploads/2016/09/rst-fucaccia-moshava-dish2.jpg'));
        Restaurants.push(new Restaurant(5, "פיצה איטליה", "פיצה","רח' עמק רפאים 38", Math.floor(44563675*Math.random()),'https://main-cdn.grabone.co.nz/goimage/fullsize/5abb371630a9a4f82e40630db1fc456a4bcc2d4f.jpg'));
        Restaurants.push(new Restaurant(6, "פיצה האט", "פיצה","קניון מלחה", Math.floor(454575*Math.random()),'https://www.mizrahi-tefahot.co.il/Lists/BankMizrahiSiteAssets/Hacartis/pizzahut17_hot610x378.jpg'));
        Restaurants.push(new Restaurant(7, "מסעדת חצות", "ים תיכונית", "רח' אגריפס 121", Math.floor(5656787*Math.random()),'https://1.bp.blogspot.com/-1rtcr1hvquk/V1MPHtGJdhI/AAAAAAAAJpU/z5bHbE76oWYpM3_WlAj_ctsgJZWyE_lUgCLcB/s1600/20160524_143032.jpg'));
        Restaurants.push(new Restaurant(8, "מסעדת אוליב אנד פיש", "דגים","רח' ז'בוטינסקי 2", Math.floor(584642*Math.random()),'https://images.rest.co.il/Customers/69986940/ad2da4f1778a4a85a9815dcfeb151e4c.jpg'));
        Restaurants.push(new Restaurant(9, "קפה פריז", "בית קפה", "שדרות בן מימון 1, ירושלים", Math.floor(2485676*Math.random()),'https://static.wixstatic.com/media/437842_25909d0bbff84109a38e2851f1fee760~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_784,h_523,al_c,q_90,usm_0.66_1.00_0.01/437842_25909d0bbff84109a38e2851f1fee760~mv2_d_5184_3456_s_4_2.webp'));
        Restaurants.push(new Restaurant(10, "מסעדת אדום", "בשרי","רחוב דוד רמז 4 , מתחם התחנה הראשונה", Math.floor(8565744*Math.random()),"https://img.wcdn.co.il/f_auto,w_700,t_18/1/7/4/6/1746764-46.jpg"));
       
           
     
        


         return Restaurants ;
       
    }

}
