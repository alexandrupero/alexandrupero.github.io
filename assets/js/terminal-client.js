---
---
jQuery(function ($) {

  'use strict';

  var anim = false;
  function typed(finish_typing) {
      return function (term, message, delay, finish) {
          anim = true;
          var prompt = term.get_prompt();
          var c = 0;
          if (message.length > 0) {
              term.set_prompt('');
              var new_prompt = '';
              var interval = setInterval(function () {
                  var chr = $.terminal.substring(message, c, c + 1);
                  new_prompt += chr;
                  term.set_prompt(new_prompt);
                  c++;
                  if (c == length(message)) {
                      clearInterval(interval);
                      // execute in next interval
                      setTimeout(function () {
                          // swap command with prompt
                          finish_typing(term, message, prompt);
                          anim = false
                          finish && finish();
                      }, delay);
                  }
              }, delay);
          }
      };
  }
  function length(string) {
      string = $.terminal.strip(string);
      return $('<span>' + string + '</span>').text().length;
  }
  var typed_prompt = typed(function (term, message, prompt) {
      term.set_prompt(message + ' ');
  });
  var typed_message = typed(function (term, message, prompt) {
      term.echo(message)
      term.set_prompt(prompt);
  });
  var timer;
  function progress(percent, width) {
      var size = Math.round(width * percent / 100);
      var left = '', taken = '', i;
      for (i = size; i--;) {
          taken += '=';
      }
      if (taken.length > 0) {
          taken = taken.replace(/=$/, '>');
      }
      for (i = width - size; i--;) {
          left += ' ';
      }
      return '[' + taken + left + '] ' + percent + '%';
  }
const logo = `[[g;white;]┌─┐┬  ┌─┐─┐ ┬┬─┐┌─┐┌┬┐┌─┐┌┐┌ ┌┬┐┌─┐┬  ┬
├─┤│  ├┤ ┌┴┬┘├┬┘│ ││││├─┤│││  ││├┤ └┐┌┘
┴ ┴┴─┘└─┘┴ └─┴└─└─┘┴ ┴┴ ┴┘└┘o─┴┘└─┘ └┘]
`;
  const apiUrl = "{{ site.terminalApiUrl }}";
  const typeJsonResultSorted = function (term, json, separator) {
      typed_message(term, json.result.sort().join(separator), 70);
  };
  const getExperienceMessage = function (exp) {
      if (!exp || jQuery.isEmptyObject(exp)) {
          return "";
      }

      const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"];
      exp.startDate = new Date(exp.startDate);
      if (exp.endDate != null) {
          exp.endDate = new Date(exp.endDate);
      }

      const startDate = monthNames[exp.startDate.getMonth()] + ", " + exp.startDate.getFullYear();
      let endDate = "present";
      if (exp.endDate != null) {
          endDate = monthNames[exp.endDate.getMonth()] + ", " + exp.endDate.getFullYear();
      }

      return `+-----------------------------------+
|${startDate} --> ${endDate}
|+----------------------------------|
|${exp.role}]
|+----------------------------------|
|${exp.company}]
|+----------------------------------|
|${exp.location}
+-----------------------------------+
+--+                                 
+-+                                  
++
+`;
  };
  const getSearchResult = function (path, result) {
      return `
[[g;white;]${path.replace(/([A-Z])/g, ' $1')}]

${path == "Experience" ? result.map(exp => getExperienceMessage(exp)).reduce((prev, cur) => prev + cur) : result.sort().join(", ")}

`;
  };
  $('#terminal').terminal([apiUrl, {
      contact: function () {
          var term = this;
          $.jrpc(apiUrl, 'contact', [], function (json) {
              window.location.href = "mailto:" + json.result;
          });
      },
      languages: function () {
          var term = this;
          $.jrpc(apiUrl, 'languages', [], function (json) {
              typeJsonResultSorted(term, json, ", ");
          });
      },
      frameworks: function () {
          var term = this;
          $.jrpc(apiUrl, 'frameworks', [], function (json) {
              typeJsonResultSorted(term, json, ", ");
          });
      },
      tools: function () {
          var term = this;
          $.jrpc(apiUrl, 'tools', [], function (json) {
              typeJsonResultSorted(term, json, ", ");
          });
      },
      "open-source-projects": function () {
          var term = this;
          $.jrpc(apiUrl, 'open-source-projects', [], function (json) {
              typeJsonResultSorted(term, json, ", ");
          });
      },
      experience: function () {
          var term = this;
          $.jrpc(apiUrl, 'experience', [], function (json) {
              var experienceMessage = "";
              for (const exp of json.result) {
                  experienceMessage += getExperienceMessage(exp);
              }

              anim = true;
              var i = 0, size = 25;
              var prompt = term.get_prompt();
              var progressPrompt = progress(0, size);
              term.set_prompt(progress);
              (function loop() {
                  progressPrompt = progress(i++, size);
                  term.set_prompt(progressPrompt);
                  if (i < 100) {
                      timer = setTimeout(loop, 30);
                  } else {
                      term.echo(progress(i, size) + ' [[b;green;]OK]');
                      term.echo(experienceMessage);
                      typed_prompt(term, ">");
                  }
              })();
          });
      },
      search: function (command) {
          var term = this;
          $.jrpc(apiUrl, 'search', [command], function (json) {
              var searchResult = "";

              if (json.error) {
                  term.echo(`[[b;red;]ERROR ${json.error.code}]: ${json.error.message}`);
                  return;
              }

              if (json.result && json.result.length > 0) {
                  const groupedResults = json.result.reduce((prev, cur) => {
                      prev[cur.path] = [...prev[cur.path] || [], cur.result];
                      return prev;
                  }, {});

                  for (const path in groupedResults) {
                      searchResult += getSearchResult(path, groupedResults[path]);
                  }
              }

              anim = true;
              var i = 0, size = 25;
              var prompt = term.get_prompt();
              var progressPrompt = progress(0, size);
              term.set_prompt(progress);
              (function loop() {
                  progressPrompt = progress(i++, size);
                  term.set_prompt(progressPrompt);
                  if (i < 100) {
                      timer = setTimeout(loop, 5);
                  } else {
                      term.echo(progress(i, size) + (searchResult ? ' [[b;green;]OK]' : '[[b;red;] NOT FOUND]'));
                      term.echo(searchResult);
                      typed_prompt(term, ">");
                  }
              })();
          });
      }
  }],
      {
          name: 'alexroman.dev',
          describe: "result.procs",
          greetings: null,
          completion: true,
          onInit: function (term) {
              typed_message(term, logo, 30, function () {
                  typed_message(term, "Hello.", 200, function () {
                      anim = true;
                      term.set_prompt("");
                      setTimeout(function () {
                          typed_message(term, "I'm Alex Roman. Software developer.", 100, function () {
                              typed_message(term, "This is my interactive CV...", 70, function () {
                                  typed_message(term, "Type [[g;white;]help] for a list of available commands.", 50, function () {
                                      typed_message(term, "Type search followed by a keyword in order to search through the CV (ex: search .NET).", 30, function () {
                                        typed_prompt(term, ">");
                                      });
                                  });
                              });
                          });
                      }, 1000);
                  });
              });
          },
          keydown: function (e, term) {
              if (anim) {
                  if (e.which == 67 && e.ctrlKey) { // CTRL+C
                      var killId = setTimeout(function () {
                          for (var i = killId; i > 0; i--) clearInterval(i)
                      }, 13);
                      anim = false;
                      term.clear();
                      term.echo(logo);
                      term.echo('[[b;red;]SKIPPED]');
                      typed_prompt(term, ">");
                  }
                  return false;
              }
          }
      });
});
