import { saveComment } from '../index';
import {SAVE_COMMENT} from '../types';

describe('save comment', ()=> {
    
    let action;
    
    beforeEach(()=> {
        action = saveComment('a comment');
    })
    
    it('has the correct type', ()=> {
        expect(action.type).toEqual(SAVE_COMMENT);
    })

    it('has the correct payload', ()=> {
        expect(action.payload).toEqual('a comment');
    })
})