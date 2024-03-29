/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent("deviceready");
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    HeyzapAds.start("608bf9e5d9278c50ea9abf81ad2e95c6").then(
      function() {
        return HeyzapAds.showMediationTestSuite(); // returns a Promise
      },
      function(error) {
        // Handle Error
      }
    );

    HeyzapAds.IncentivizedAd.fetch().then(
      function() {
        alert("IncentivizedAd error");
      },
      function(error) {
        // Handle Error
      }
    );
  },
  bannerShow: function() {
    alert("i am in banner show function");
    HeyzapAds.BannerAd.show(HeyzapAds.BannerAd.POSITION_TOP).then(
      function() {
        // Native call successful.
        alert("BannerAd");
      },
      function(error) {
        alert("BannerAd error", error);
        // Handle Error
      }
    );
  },
  industrialAdsShow: function() {
    HeyzapAds.InterstitialAd.show().then(
      function() {
        alert("industrial show");
      },
      function(error) {
        alert("industrial error");
        // Handle Error
      }
    );
  }
};

app.initialize();
