/*
 * @Author: ytj 
 * @Date: 2018-07-12 09:12:47 
 * @Last Modified by: ytj
 * @Last Modified time: 2018-07-19 14:25:57
 */

let app = getApp();

Page({
    data: {
        tabs: [{
                imgSrc: '/common/imgs/collection.png'
            },
            {
                imgSrc: '/common/imgs/studyMode.png'
            },
            {
                imgSrc: '/common/imgs/questionSelect.png'
            }
        ],
        showDetail: false,
        showAnswer: false,
        currentItem: 0,
        isPullUp: false
    },
    properties: {
        questions: [],
    },
    handleToggletab(event) {
        const index = event.detail.index;
        // 0 represent collection, 1 represent studyMode, 2 represent float panel
        if (index === 0) {

        } else if (index === 1) {
            let question = this.data.questions.find(element => element.num === this.data.currentItem);
            question.showDetail = !question.showDetail;
            question.showAnswer = true;
            this.setData({
                questions: this.data.questions,
            })
        } else if (index === 2) {
            this.setData({
                isPullUp: !this.data.isPullUp
            });
        }
    },
    handleSwiperChange(event) {
        this.setData({
            currentItem: event.detail.current
        })
    },
    initData() {
        let questions = [{
                num: 0,
                type: '多选题',
                answer: 'ABD',
                hasPic: false,
                title: "林某驾车以110公里/小时的速度在城市道路行驶，与一辆机动车追尾后弃车逃离被群众拦下。经鉴定，事发时林某血液中的酒精浓度为135.8毫克/百毫升。林某的主要违法行为是什么？",
                options: [
                    "醉酒驾驶",
                    "超速驾驶",
                    "疲劳驾驶",
                    "肇事逃逸"
                ],
                detail: "违法行为有：一、“以110公里/小时的速度在城市道路行驶”属于超速驾驶；二、“与一辆机动车追尾后弃车逃离”属于肇事逃逸；三、“血液中的酒精浓度为135.8毫克/百毫升”是醉酒驾驶。",

            },
            {
                num: 1,
                type: '单选题',
                answer: 'A',
                hasPic: true,
                title: "机动车驾驶人违法驾驶造成重大交通事故构成犯罪的，依法追究什么责任？",
                options: [
                    "刑事责任",
                    "民事责任",
                    "经济责任",
                    "直接责任"
                ],
                detail: "《道路交通安全法》第一百零一条：违反道路交通安全法律、法规的规定，发生重大交通事故，构成犯罪的，依法追究刑事责任，并由公安机关交通管理部门吊销机动车驾驶证。",
            },
            {
                num: 2,
                type: '判断题',
                answer: 'B',
                hasPic: 'false',
                title: "对违法驾驶发生重大交通事故且构成犯罪的，不追究其刑事责任。",
                options: [
                    "正确",
                    "错误",
                    "",
                    ""
                ],
                detail: "《道路交通安全法》第一百零一条：违反道路交通安全法律、法规的规定，发生重大交通事故，构成犯罪的，依法追究刑事责任，并由公安机关交通管理部门吊销机动车驾驶证。",
            },
            {
                num: 3,
                type: '单选题',
                answer: 'B',
                hasPic: 'true',
                title: "驾驶机动车应当随身携带哪种证件？",
                options: [
                    "工作证",
                    "驾驶证",
                    "身份证",
                    "职业资格证"
                ],
                detail: "《道路交通安全法》第十一条：驾驶机动车上道路行驶，应当悬挂机动车号牌，放置检验合格标志、保险标志，并随车携带机动车行驶证。",
            },
        ]
        questions = questions.map(element => {
            return {
                ...element,
                showDetail: false,
                showAnswer: false
            }
        })
        this.setData({
            questions: questions
        })
    },
    onLoad() {
        this.initData();
    }
})