import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger'

import { ArticleService } from './article.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { ActiveArticleDto } from './dto/active-article.dto'

@Controller('article')
@ApiTags('精品文章')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('list')
  @ApiOperation({
    summary: '查询文章列表'
  })
  findAll() {
    return this.articleService.findAll()
  }

  @Get('detail/:id')
  @ApiOperation({
    summary: '查询文章详情'
  })
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id)
  }

  @Post('save')
  @ApiOperation({
    summary: '创建文章'
  })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto)
  }

  @Post('save/:id')
  @ApiOperation({
    summary: '更新文章'
  })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto)
  }

  @Post('active')
  @ApiOperation({
    summary: '上下架文章'
  })
  @ApiBody({ type: ActiveArticleDto })
  active(@Body() activeArticleDto: ActiveArticleDto) {
    const { id, status } = activeArticleDto
    return this.articleService.active(+id, +status)
  }

  @Post('del/:id')
  @ApiOperation({
    summary: '删除文章'
  })
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id)
  }
}
