import { Injectable} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable()
export class UtilityService {

    public static MathPower(value, power: number) {
        return Math.pow(value, power);
    }

    public static MathRound(value: number) {
        return Math.round(value);
    }

    public static NumberWithComas(value: number) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    public static isEmptyObject(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    public static ResizeWindow(): void {
        window.dispatchEvent(new Event('resize'));
    }

    public static extractData(response: any) {
        let body = response;
        return body || {};
    }

    public static TrackByFunction(index, item) {
        if (!item) {
            return null;
        } else {
            return index;
        }        
    }

    public static CompareWithFunction(item1, item2) {
        return item1 && item2 ? item1.name === item2.name : item1 === item2;
    }

    public static GetCarbonCopy(object: any) {
        return JSON.parse(JSON.stringify(object));
    }

    public static MoveDragDrop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    public static ReverseDragDrop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.currentIndex, event.previousIndex);
        } else {
            transferArrayItem(event.container.data, event.previousContainer.data, event.currentIndex, event.previousIndex);
        }
    }
}
