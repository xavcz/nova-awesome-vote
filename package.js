Package.describe({
  name: "xavcz:nova-awesome-vote"
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'fourseven:scss',

    'nova:core',
    'nova:base-components',
    'nova:posts',
  ]);

  api.mainModule('lib/modules.js', ['client', 'server']);

  api.addFiles([
    'lib/awesome.scss'
  ], ['client']);

});
