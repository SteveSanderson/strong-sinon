/// <reference path="sinon.d.ts" />
export = Main;
declare module Main {
    function func<TFunc>(fn?: TFunc): CapturedFunc<TFunc>;
    function objMethod<TFunc>(obj: any, method: string): CapturedFunc<TFunc>;
    interface CapturedFunc<TFunc> extends SinonSpy {
        fn: TFunc;
    }
}
