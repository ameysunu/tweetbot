import Twit, { Response } from 'twit';

const Twitter = new Twit(require('./config'));

const mediaArtsSearch: Twit.Params = {
  q: '#Flutter',
  count: 100,
  result_type: 'recent',
};

const newMediaRT: Twit.Params = {
  q: '#FlutterDev',
  count: 100,
  result_type: 'recent',
}

const retweetLatest = () => {
  Twitter.get('search/tweets', mediaArtsSearch, (error: Error, data: any) => {
    console.log(error, data);
    if (!error) {
      const retweetId = data.statuses[0].id_str;
      Twitter.post(
        'statuses/retweet/' + retweetId,
        {},
        (error: Error, response: Response) => {
          if (response) {
            console.log(
              'Succesfully Tweeted!',
            );
          }
          if (error) {
            console.log('There was an error with Twitter:', error);
          }
        },
      );
    } else {
      console.log('There was an error with your hashtag search:', error);
    }
  });
};

const retweetNewTwitter = () => {
  Twitter.get('search/tweets', newMediaRT, (error: Error, data: any) => {
    console.log(error, data);
    if (!error) {
      const retweetId = data.statuses[0].id_str;
      Twitter.post(
        'statuses/retweet/' + retweetId,
        {},
        (error: Error, response: Response) => {
          if (response) {
            console.log(
              'Succesfully Tweeted!',
            );
          }
          if (error) {
            console.log('There was an error with Twitter:', error);
          }
        },
      );
    } else {
      console.log('There was an error with your hashtag search:', error);
    }
  });
};

retweetLatest();
retweetNewTwitter(); 
setInterval(retweetLatest, 1000 * 30 * 2);
setInterval(retweetNewTwitter, 1000 * 30 * 2);
