import {inject, async, TestComponentBuilder} from "@angular/core/testing"
import {SimpleComponent} from "../app/simple.component"

describe('Simple Component Test', () => {
    let component: SimpleComponent;

    beforeEach(() => {
        component = new SimpleComponent();
    });

    it('should be defined', () => {
        expect(component).toBeDefined();
    });
});

describe('Simple Component Length Test', () => {
    let component: SimpleComponent;

    beforeEach(() => {
        component = new SimpleComponent();
    });

    it('Initial title should be 4 characters long', () => {

        expect(component.name.length).toBe(4);
    });
});

describe('Simple Component Name Test', () => {
    let component: SimpleComponent;

    beforeEach(() => {
        component = new SimpleComponent();
    });

    it('Initial Name Should be \'here\'', () => {

        expect(component.name).toEqual('here');
    });
});

describe("Test Initialization of Component", () => {

    it("should have 'here' as initial input value ",
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb
                .createAsync(SimpleComponent)
                .then((fixture) => {
                    fixture.detectChanges();

                    let compiled: Element = fixture.debugElement.nativeElement;
                    expect(compiled.getElementsByTagName("input")[0].value)
                        .toContain('here');
                });
        }))
    );

    it("should have a button",
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb
                .createAsync(SimpleComponent)
                .then((fixture) => {
                    fixture.detectChanges();

                    let compiled: Element = fixture.debugElement.nativeElement;

                    expect(compiled.getElementsByTagName("button")[0])
                        .not.toBe(undefined);
                    expect(compiled.getElementsByTagName("button")[0].innerHTML)
                        .toContain('toggle');
                })
        }))
    );
});

describe("Test Button Clicking functionality", () => {

    it("should toggle the output",
        async(inject(
            [TestComponentBuilder],
            (tcb: TestComponentBuilder) => {
                return tcb
                    .createAsync(SimpleComponent)
                    .then((fixture) => {
                        fixture.detectChanges();

                        let compiled: Element = fixture.debugElement.nativeElement;
                        compiled.getElementsByTagName("button")[0].click();

                        fixture.detectChanges();
                        expect(
                            compiled.getElementsByTagName("label")[0].hidden
                        ).toBe(true);
                    })
            }))
    );
});