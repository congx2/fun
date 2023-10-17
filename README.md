# fun
fun

nestjs + mongonDB

log/cookie auth/

banner/works/comments/news/article/sites

分页/上下架

Response: {
    code: number; 0 - OK, other: error
    message: string; OK or errorMessage
    data: unknown;
}


1. Banner

   - post /banner/save
   - post /banner/delelte
   - get  /banner/list
   - get  /banner/:id

BannerItem:
{
    id: '',
    position: '',
    cover: '',
    link: '',
    order: '',
    startTime: '',
    endTime: ''
}


2. 作品 Works

   - post /works/save
   - delelte /works/:id
   - get  /works/list
   - get  /works/:id
   - post /works/comment/submit
   - get /works/comment/list
   - delete /works/comment/:id

WorksItem:
{
    id: '',
    cover: '',
    link: '',
    order: '',
    title: '',
    describe: '',
    author: '',
    createTime: '',
    updateTime: '',
    viewCount: '',
    commentCount: '',
    likeCount: ''
}

3. Comments

   - get  /comment/list
   - get  /comment/:id
   - post /comment/submit
   - delete /comment/:id

CommentItem:
{
    id: '',
    content: '',
    createTime: '',
    avatar: '',
    userName: '',
    job: '',
    comments: CommentItem[]
}

4. News

   - post   /news/save/:id?
   - delete /news/:id
   - post   /news/active/:id
   - get    /news/list
   - get    /news/:id
   - get    /news/comments/:id
   - post   /news/comments/submit

NewsItem:
{
    id: '',
    content: '',
    createTime: '',
    updateTime: '',
    icon: '',
    author: ''
}


5. Article

ArticleItem:
{
    id: '',
    author: '',
    title: '',
    abstract: '',
    content: '',
    link: '',
    createTime: '',
    updateTime: '',
    viewCount: '',
    commentCount: '',
    likeCount: ''
}


6. Sites

SiteItem:
{
    id: '',
    category: '',
    name: '',
    describe: '',
    link: '',
    icon: '',
    createTime: '',
    updateTime: '',
}

