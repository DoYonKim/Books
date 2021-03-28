import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';

class AdHelper {

  bool _isInitialized = false;

  //배너광고
  BannerAd _banner;

  //전면광고
  InterstitialAd _interstitial;

  void loadBanner(Function(BannerAd) onBannerLoaded) async{
    await _initialize();

    if(_banner != null && await _banner.isLoaded()){
      onBannerLoaded(_banner);
      return ;
    }

    _banner = BannerAd(
      adUnitId: _getBannerAdUnitId(),
      size: AdSize.banner,
      request: AdRequest(
        testDevices: [
          'test_id'
        ],
      ),
      listener: AdListener(
        onAdLoaded: (ad) {
          onBannerLoaded(ad);
        },
      ),
    );

    _banner.load();
  }

  void loadInterstitial() async{
    if(_interstitial != null && await _interstitial.isLoaded()){
      return;
    }

    _interstitial = InterstitialAd(
      adUnitId: _getInterstitialAdUnitId(),
      request: AdRequest(
        testDevices: [
          'testDeviceID'
        ],
      ),
      listener: AdListener(
        onAdClosed: (ad){
          _interstitial = null;
        }
      ),
    );

    _interstitial.load();
  }

  void showInterstitial() async{
    if (await _interstitial.isLoaded()){
      _interstitial.show();
    }
  }

  EdgeInsets getFabPadding(BuildContext context){
    double bannerHeight = 50.0;
    bool hasBottomNavigation = MediaQuery.of(context).viewPadding.bottom > 0;
    double bottomPadding = hasBottomNavigation ? 16.0 : 0.0;
    return EdgeInsets.only(bottom: bannerHeight + bottomPadding);
  }

  void dispose(){
    if(_banner != null){
      _banner.dispose();
    }

    if(_interstitial != null){
      _interstitial.dispose();
    }
  }

  Future<void> _initialize() async {
    if(!_isInitialized){
      await MobileAds.instance.initialize();
      _isInitialized = true;
    }
  }

  String _getBannerAdUnitId(){
    if(Platform.isAndroid){
      return 'ca-app-pub-3940256099942544/6300978111';
      // return 'ca-app-pub-5859067419969277/5897666036';
    }else if(Platform.isIOS){
      return 'ca-app-pub-3940256099942544/2934735716';
      // return 'ca-app-pub-5859067419969277/6610329513';
    }
  }

  String _getInterstitialAdUnitId(){
    if(Platform.isAndroid){
      return 'ca-app-pub-3940256099942544/1033173712';
      // return 'ca-app-pub-5859067419969277/7685939166';
    }else if(Platform.isIOS){
      return 'ca-app-pub-3940256099942544/4411468910';
      // return 'ca-app-pub-5859067419969277/7731839499';
    }
  }

}