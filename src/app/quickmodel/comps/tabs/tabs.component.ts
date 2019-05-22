import { Component, OnInit } from '@angular/core';
import { QuickmodelService } from 'src/app/user/service/quickmodel.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {
  firstTab = 'myresource';
  secondTab = 'uploaded';
  thirdTab = 'history_resource';
  tabList: any[];
  constructor( private quickmodelService: QuickmodelService) { }

  ngOnInit() {
  }

  chooseFirstTab(val): void {
    this.tabList = [];
    this.firstTab = val;
    switch (this.firstTab) {
      case 'myresource':
        this.chooseSecondTab(this.secondTab);
        break;
      case 'resourcetag':
        this.getResource();
        break;
      case 'datacenter':
        this.getDatacenter();
        break;
      default:
        break;
    }
  }

  chooseSecondTab(val): void {
    this.tabList = [];
    this.secondTab = val;
      if (val === 'uploaded') {
        return;
      } else if (val === 'history') {
        this.chooseThirdTab(this.thirdTab);
      }
  }

  getResource(): void {
      this.getResourcePoolList(1);
  }

  getDatacenter(): void {
    this.getResourcePoolList(0);
  }

  getResourcePoolList(val): void {
      const params = {
        page: {
          page: 0,
          pageSize: 14
        },
        searchData: '',
        weiduId: '',
        topicId: '',
        flag: val
      };

      this.quickmodelService.getResourcePoolList(params).subscribe(data => { this.tabList = data.data; })
  }

  chooseThirdTab(val): void {
    this.tabList = [];
    this.thirdTab = val;
    switch (this.thirdTab) {
      case 'history_resource':
        this.getMyResource();
        break;
      case 'history_result':
        this.getHistoryList();
        break;
      case 'shared_upload':
        this.getMyResource();
        break;
      default:
        break;
    }
  }

  getHistoryList(): void {
    const params = {
      endTime: '',
      order: '',
      orderCol: '',
      page: 0,
      pageSize: 10,
      startTime: '',
      taskName: '',
      taskType: '' ,
      userId: '',
      type: '0',
      topicId: ''
    };

    this.quickmodelService.getModelList(params).subscribe(data => {
      this.tabList = data.data.filter(function (data) {
        data.resultId = data.resultId;
        data.sceneName = data.name;
        data.sceneDesc = data.cjsj.substring(0, 10);
        data.ischecked = false;
        return data;
      });
    });
  }

  getMyResource(): void {
    const queryParams = {
      type: this.thirdTab === 'history_resource' ? '0' : '1',
      searchData: '',
      topicId: ''
    };

    const bodyParams = {
      page: 0,
      pageSize: 14
    };

    this.quickmodelService.getMyResource(queryParams, bodyParams).subscribe(data => {
      this.tabList = data.data.filter(function (data) {
        data.resultId = data.id;
        data.sceneName = data.fileName;
        data.sceneDesc = data.createTime.substring(0, 10);
        data.ischecked = false;
        return data;
      });
    });
  }

}
