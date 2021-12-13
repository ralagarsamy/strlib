import test from 'ava';
import reverse from '../src/index.js'

test('reverse', t => {
    t.is(reverse('hello'), 'olleh', 'The Strings to not match')
    t.is(reverse('goodbye'), 'eybdoog')
})