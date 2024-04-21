// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *   npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

    let males = _.filter(array, customer => customer.gender === "male");
    return males.length;

};

var femaleCount = function(array) {
    let females = _.reduce(array, function(acc, current) {
        if (current.gender === "female") {
            acc++
            }
            return acc;
    }, 0);
    return females;
};



var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(acc, current) {
        if (current["age"] > acc["age"]) {
            return current;
          } else {
            return acc;
          }
          });
          return oldest["name"];
        };

var youngestCustomer = function(array) {
    let youngest = _.reduce(array, function(acc, current) {
        if (current["age"] < acc["age"]) {
            return current;
        } else {
            return acc;
        }
    });
            return youngest["name"];
};

var averageBalance = function(customers) {
    var totalBalance = customers.reduce(function(acc, customer) {
      var balanceString = customer.balance;
      balanceString = balanceString.replace("$", "").replace(",", "");
      var balance = Number(balanceString);
      return acc + balance;
    }, 0);
    var average = totalBalance / customers.length;
    return average;
  };
  /*
  console.log(averageBalance(arr));
*/
var firstLetterCount (data, letter) {
    letter.toLowerCase();
    const count = data.reduce((acc, current => {
        const firstLetter = item.current.charAt(0).toLowerCase();
        if (firstLetter === letter) {
            acc++
        }
        return acc;
    }, 0));
    return count;
};

var friendFirstLetterCount = function(data, customerName, letter) {
    const customer = data.find(item => item.name === customerName);
    if (!customer) {
        return 0;
    }
    letter = letter.toLowerCase();
    const count = customer.friends.reduce((acc, current) {
        const firstLetter = current.name.charAt(0).toLowerCase();
        if (firstLetter === letter) {
            acc++;
        }
        return acc;
    }, 0);
    return count;
};

var friendsCount = function(data, customerName) {
    const customer = data.find(item => item.name === customerName);
    if (!customer) {
        return [];
    }
    const friends = data.reduce((acc, item) => {
        const isFriend = item.friends.some(friend => friend.name === customerName);
        if (isFriend) {
            acc.push(item.name)
        }
        return acc;
    }, []);
};

var topThreeTags = function(data) {
    const tagFreq = {};
    data.forEach(customer => {
        customer.tags.forEach(tag => {
        tagFreq[tag] = (tagFreq[tag] || 0) + 1;
    });
});
};

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
