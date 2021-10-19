import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { PromisifyHttpService, StringUtilsService } from './services';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { ActionsService } from './actions.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [],
  providers: [
    StringUtilsService,
    PromisifyHttpService,
  ],
  exports: [
    StringUtilsService,
    PromisifyHttpService,
  ],
})
@NgModule({
  imports: [CommonModule],
  declarations: [PagerComponent],
  exports: [PagerComponent],
  providers: [ActionsService],
})

export class SharedModule {}
