# Prioritization Custom Field Forge 

This simple Forge app adds a prioritization custom field that you can configure on your issue screens in classic projects.
The purpose of the app is to demonstrate how to develope quickly serverless applications with Atlassian Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

Once you have logged into the CLI (`forge login`), follow the steps below to install the app onto your site:

1. Clone this repository
2. Run `forge register` to register a new copy of this app to your developer account
3. Run `npm install` to install your dependencies
4. Run `forge deploy` to deploy the app into the default environment
5. Run `forge install` and follow the prompts to install the app

## Usage

* Go the the list of custom fields.
* Find the *Prioritization Custom Field* custom field.
* Click the *more* menu, and then select *Associate to Screens*.
* Check the screens you want to use the field on, and then click *Update*.

## Documentation

The app consists of one custom field defined in the `manifest.yml` file. 
The custom field's view is implemented by the `renderFieldView` function defined in `/src/index.jsx`. 
The custom field's editing experience is implemented by the `renderFieldEdit` function defined in `/src/index.jsx`. 

## License

Copyright (c) 2020 Atlassian and others.
Apache 2.0 licensed, see [LICENSE](./LICENSE) file.