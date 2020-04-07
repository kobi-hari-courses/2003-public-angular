import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MyValidators {
    static nospace(control: AbstractControl): null | ValidationErrors {
        if (!control.value) return null;
        if (typeof(control.value) !== 'string') return null;

        const value = <string>control.value;

        const hasSpace = value.includes(' ');
        if (!hasSpace) return null;

        return {'nospace': true};

    }

    static wordsCount(count: number): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) return null;
            if (typeof(control.value) !== 'string') return null;
    
            const value = <string>control.value;

            const words = value.split(' ').filter(w => w);

            if (words.length >= count) return null;
    
            return {'wordsCount': {
                expectedWords: count, 
                actualWords: words.length
            }};
    
        }
    }
}