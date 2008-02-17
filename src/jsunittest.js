<%= include 'HEADER' %>

var JsUnitTest = {
  Version: '<%= APP_VERSION %>',
};

<%= include 'common.js' %>

<%= include 'prototype/template.js', 'prototype/event.js' %>

<%= include 'logger.js', 'message_template.js' %>
<%= include 'assertions.js' %>
<%= include 'runner.js', 'test_case.js' %>
