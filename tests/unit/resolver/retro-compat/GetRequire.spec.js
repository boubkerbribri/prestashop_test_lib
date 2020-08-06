/* eslint-disable */
require('module-alias/register');

const RetroCompatResolver = require('@resolvers/RetroCompatResolver.js');
const assert = require('assert');
const getRequireClassExtends = require('@unitTests/data/getRequireClassExtends');
const getRequireCustomClassExtends = require('@unitTests/data/getRequireCustomClassExtends');

describe('Testing resolver retroCompact getRequire', function () {
    it('should call default require', function () {
        const retroCompatResolver = new RetroCompatResolver('177');
        assert.equal(retroCompatResolver.getRequire(
                'test.js',
                getRequireClassExtends
            ),
            'test.js'
        );
    });

    it('should call override version require', function () {
        const retroCompatResolver = new RetroCompatResolver('178');
        assert.equal(retroCompatResolver.getRequire(
            'test.js',
            getRequireClassExtends
        ),
        'version.js'
        );
    });

    it('should call override custom require', function () {
        const retroCompatResolver = new RetroCompatResolver('177');
        assert.equal(retroCompatResolver.getRequire(
            'test.js',
            getRequireCustomClassExtends
        ),
        process.cwd() + '/' + 'custom.js'
        );
    });
});
