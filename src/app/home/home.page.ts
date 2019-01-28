import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private storage: Storage) {

  }

  ngOnInit() {   

    this.storage.get('reward').then((val) => {

      this.updateRewardUI(val);
    });
  }


  button1 = false
  button2 = false
  button3 = false
  button4 = false
  button5 = false
  button6 = false

  // Reward 
  reward1 = false
  reward2 = false
  reward3 = false
  reward4 = false
  reward5 = false



  onClick(button: String) {
    switch (button) {

      case ("1"): {
        this.button1 = !this.button1;
        this.addReward()
        return
      }
      case ("2"): {
        this.button2 = !this.button2;
        this.addReward()
        return
      }
      case ("3"): {
        this.button3 = !this.button3;
        this.addReward()
        return
      }
      case ("4"): {
        this.button4 = !this.button4;
        this.addReward()
        return
      }
    }
  }

  addReward() {
    if (this.button1 && this.button2 && this.button3 && this.button4) {
      this.storage.get('reward').then((val) => {
        var reward = val + 1;

        if (val >= 5) return  // we have only 5 reward points

        this.storage.set('reward', reward);
        console.log(reward);
        this.updateRewardUI(reward)
      });
      // to uncheck after checking all 10 buttons
      this.button1 = false
      this.button2 = false
      this.button3 = false
      this.button4 = false
      this.button5 = false
    }
  }

  updateRewardUI(reward: Number) {

    if (reward == 1) {
      this.reward1 = true
    }

    if (reward == 2) {
      this.reward1 = true
      this.reward2 = true
    }

    if (reward == 3) {
      this.reward1 = true
      this.reward2 = true
      this.reward3 = true
    }

    if (reward == 4) {
      this.reward1 = true
      this.reward2 = true
      this.reward3 = true
      this.reward4 = true
    }

    if (reward == 5) {
      this.reward1 = true
      this.reward2 = true
      this.reward3 = true
      this.reward4 = true
      this.reward5 = true
    }

  }

  // object : Object
  // printJson(noGuests: string, name: string, phone : String, mailId : String) {

  //   var jsonData = {
  //     'noGuests' : noGuests,
  //     'name' : name,
  //     'phone' : phone,
  //     'mailId' : mailId
  //   }
  //   console.log(jsonData);

  // }
}
