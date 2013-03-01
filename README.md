# Password Toggle

A jQuery plugin to toggle an input between password and text

## Instalation

Include script *after* the jQuery library:

    <script src="/path/to/jquery.passwordtoggle.js"></script>

## Usage

Single field

    <input type="password" placeholder="Password" id="inputPassword">
    <label class="checkbox inline">
      <input type="checkbox" class="input-mask" data-toggle="inputPassword">Toggle Password
    </label>

    $('.input-mask').passwordToggle();

Multiple fields

    <input type="password" placeholder="Password" id="inputGroup1">
    <input type="password" placeholder="Password" id="inputGroup2">
    <label class="checkbox inline">
      <input type="checkbox" class="input-mask" data-toggle='["inputGroup1", "inputGroup2"]'>Toggle Password
    </label>

    $('.input-mask').passwordToggle();


## Options

## Changelog

## Development

- Source hosted at [GitHub](https://github.com/cbaigorri/SimpleSprite)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/cbaigorri/SimpleSprite/issues)

## Authors

[Chris Baigorri](https://github.com/cbaigorri)

