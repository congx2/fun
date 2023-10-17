import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'

import { BannerService } from './banner.service'
import { CreateBannerDto } from './dto/create-banner.dto'

@Controller('banner')
@ApiTags('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get('list')
  @ApiOperation({
    summary: '查询banner列表'
  })
  findAll() {
    return this.bannerService.findAll()
  }

  @Get('detail/:id')
  @ApiOperation({
    summary: '查询banner详情'
  })
  findOne(@Param('id') id: string) {
    return this.bannerService.findOne(+id)
  }

  @Post('save')
  @ApiOperation({
    summary: '创建/更新banner',
    description: '有id则更新，无id则新增'
  })
  create(@Body() createBannerDto: CreateBannerDto) {
    if (createBannerDto.id) {
      return this.bannerService.update(+createBannerDto.id, createBannerDto)
    }
    return this.bannerService.create(createBannerDto)
  }

  @Post('del/:id')
  @ApiOperation({
    summary: '删除banner'
  })
  remove(@Param('id') id: string) {
    return this.bannerService.remove(+id)
  }
}
