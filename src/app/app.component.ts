import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shaibaz-app';

  iplTeams: Array<string> = ["KKR", "RCB", "SRH", "MI", "CSK", "GT", "LSG", "PBKS", "RR"];

  kkrPlayers: Array<string> = ["Sunil Narine", "Ajinkya Rahane", "Finn Allen", "Rinku Sing", "Andre Russel", "Camron Green", "Mathesha Pathirana", "Angrish Raghuvanshi", "Manish Pandey", "Ramandeep Singh", "Varun"];

  rcbPlayers: string[] = ["Virat Kohli", "Phil Salt ", "Rajat Patidar ", "Devdutt Padikkal", "Devdutt Padikkal ", "Jitesh Sharma ", "Tim David)", "Venkatesh Iyer", "Krunal Pandya", "Bhuvneshwar Kumar ", "Josh Hazlewood ", "Yash Dayal "]

  srhPlayers: string[] = ["Travis Head",
    "Abhishek Sharma",
    "Ishan Kishan",
    "Heinrich Klaasen",
    "Nitish Kumar Reddy",
    "Liam Livingstone",
    "Aniket Verma",
    "Harsh Dubey",
    "Harshal Patel",
    "Jaydev Unadkat",
    "Eshan Malinga"]

    miPlayers :string[] = ["Rohit Sharma", "Ryan Rickelton", "Suryakumar Yadav", "Tilak Varma", "Hardik Pandya", "Sherfane Rutherford", "Naman Dhir", "Shardul Thakur", "Mayank Markande", "Trent Boult", "Jasprit Bumrah"];

     cskPlayers: string[] = ["Ruturaj Gaikwad", "Devon Conway", "Rachin Ravindra", "Shivam Dube", "MS Dhoni", "Ravindra Jadeja", "Sameer Rizvi", "Deepak Chahar", "Tushar Deshpande", "Matheesha Pathirana", "Maheesh Theekshana"];

      gtPlayers: string[] = ["Shubman Gill", "Sai Sudharsan", "Jos Buttler", "Shahrukh Khan", "Rahul Tewatia", "Rashid Khan", "Mohammed Shami", "Spencer Johnson", "Mohit Sharma", "Umesh Yadav", "Sai Kishore"];

     lsgPlayers: string[] = ["Rishabh Pant", "Ayush Badoni", "Nicholas Pooran", "Aiden Markram", "David Miller", "Marcus Stoinis", "Krunal Pandya", "Ravi Bishnoi", "Mohsin Khan", "Naveen-ul-Haq", "Mayank Yadav"];

      pbksPlayers: string[] = ["Shashank Singh", "Prabhsimran Singh", "Liam Livingstone", "Rilee Rossouw", "Jitesh Sharma", "Sam Curran", "Ashutosh Sharma", "Harpreet Brar", "Harshal Patel", "Kagiso Rabada", "Arshdeep Singh"];

       rrPlayers: string[] = ["Sanju Samson", "Yashasvi Jaiswal", "Jos Buttler", "Riyan Parag", "Shimron Hetmyer", "Dhruv Jurel", "Ravichandran Ashwin", "Trent Boult", "Avesh Khan", "Sandeep Sharma", "Yuzvendra Chahal"];



}
