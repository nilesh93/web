import NetworkService from './NetworkService'
import AuthService from './AuthService'
import OnboardingService from './OnboardingService'

import {router} from '../main'

export default {
  getAuth(){
    return AuthService.user
  },
  getUser(){
    var auth = this.getAuth();
    if (auth.authenticated){
      return auth.data;
    } else {
      return false;
    }
  },
  getOnboarding(){
    return OnboardingService.status;
  },
  setProfile(context, data, redirect){
    NetworkService.setProfile(context, data).then((res) => {
      context.msg = 'Set!'
      if (redirect){
        router.push(redirect)
      }
    }, (res) => {
      context.msg = 'Error occurred';
      console.log(res);
    })
  }
}