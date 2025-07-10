//You are given an integer eventTime denoting the duration of an event. You are also given two integer arrays startTime and endTime, each of length n.
//These represent the start and end times of n non-overlapping meetings that occur during the event between time t = 0 and time t = eventTime, where the ith meeting occurs during the time [startTime[i], endTime[i]].
//You can reschedule at most one meeting by moving its start time while maintaining the same duration, such that the meetings remain non-overlapping, to maximize the longest continuous period of free time during the event.
//Return the maximum amount of free time possible after rearranging the meetings.
//Note that the meetings can not be rescheduled to a time outside the event and they should remain non-overlapping.
//Note: In this version, it is valid for the relative ordering of the meetings to change after rescheduling one meeting.

function maxFreeTime(eventTime: number, startTime: number[], endTime: number[]): number {
    //Ordering the meeting
    const timeLine = new Array();
    for (let i = 0; i <= eventTime; i++) {
        if(!startTime[i] && timeLine.length < eventTime) {
            timeLine.push(null)
            continue;
        }

        if(i === 0 && startTime[i] !== 0) {
            let freeFirstTime = startTime[i];
            while (freeFirstTime > 0) {
                timeLine.push(null);
                freeFirstTime = freeFirstTime - 1
            }
        }

        let durationMeet = endTime[i] - startTime[i];
        while (durationMeet > 0) {
            timeLine.push(i);
            durationMeet = durationMeet - 1
        }
        let freeSpaceToTheNextMeet = startTime[i + 1] - endTime[i];
        while (freeSpaceToTheNextMeet > 0) {
            timeLine.push(null)
            freeSpaceToTheNextMeet -= 1;
        }
    }
    console.log(timeLine)
    const maxFreeTime = calculateMaxFreeTime(0, timeLine)
    return maxFreeTime
};

function calculateMaxFreeTime(maxSpaces: number = 0, array: Array<number | null>, meetToRelocate: number = 0): number {
    const meetFound = array.find(meet => meet === meetToRelocate) 
    if (!meetFound) {
        console.log('era la wea')
        return maxSpaces
    }

    


    return 0
}

maxFreeTime(10, [2,6], [3,8])



 
