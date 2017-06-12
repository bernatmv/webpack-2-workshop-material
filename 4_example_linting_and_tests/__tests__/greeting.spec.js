import greeting from '../src/helpers/greeting';

describe('greeting', () => {

    describe('if we call the function with two valid parameters', () => {
        let me = 'TestUser-1';
        let you = 'TestUser-2';

        it('should return a greeting', () => {
            expect(greeting(me, you)).toEqual(`Hey, ${you}! It's me, ${me}.`);
        });
    });
});