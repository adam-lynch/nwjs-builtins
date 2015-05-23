var should = require('chai').should();

describe('builtins', function(){
    it('should be an array', function(){
        var builtins = require('./');
        builtins.should.be.an('array');
    });

    it('should be an array of strings', function(){
        var builtins = require('./');

        builtins.forEach(function(builtin){
            builtin.should.be.a('string');
        });
    });
});