Meetup API Widget Foundry Source Repository
---------------------------------------

This is the repository that drives our [Widget Foundry][wf].

To test widgets locally, you'll need to create a file called `api_key.js` in your checked out directory of the repository. In that file, assign your API key to a global variable:

    $api_key = "my-api-key-goes-here"

The key is only used for local testing. When a widget is published to the foundry, itsrequest urls will be signed for whichever user is logged in.

With a key file in place you should be able to preview any of the widget HTML sources in a browser, especially the ones with "live" in their filename as they have been tested and are live on our site. (For new widgets, please leave "live" out of the name; we'll add that after it's tested.) 

To try out your widget inside the foundry, can paste it over the source of any other widget there; just click on its Edit Source link. And when you're finished, send us a pull request!

For any questions about using the foundry or the Meetup API in general, see the [the API forum][forum].

[wf]: http://www.meetup.com/meetup_api/foundry/
[forum]: http://www.meetup.com/boards/forum/811221
