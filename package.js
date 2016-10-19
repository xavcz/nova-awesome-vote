Package.describe({
  name: "xavcz:nova-awesome-vote",
  summary: "Nova component vote extension pacakge",
  version: "0.27.3-nova",
  git: "https://github.com/xavcz/nova-awesome-vote.git"
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'fourseven:scss',

    'nova:core',
    'nova:base-components',
    'nova:users',
    'nova:posts',
  ]);

  api.mainModule('lib/modules.js', ['client', 'server']);

  api.addFiles([
    'lib/awesome.scss'
  ], ['client']);

});
