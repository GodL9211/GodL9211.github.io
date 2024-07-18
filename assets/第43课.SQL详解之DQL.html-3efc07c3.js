import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as d,f as i}from"./app-9976b6d0.js";const s={},l=i(`<h2 id="第43课-sql详解之dql" tabindex="-1"><a class="header-anchor" href="#第43课-sql详解之dql" aria-hidden="true">#</a> 第43课：SQL详解之DQL</h2><p>接下来，我们利用之前创建的学校选课系统数据库，为大家讲解 DQL 的应用。无论对于开发人员还是数据分析师，DQL 都是非常重要的，它关系着我们能否从关系数据库中获取我们需要的数据。建议大家把上上一节课中建库建表的 DDL 以及 上一节课中插入数据的 DML 重新执行一次，确保表和数据跟没有问题再执行下面的操作。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>use \`school\`;

-- 01. 查询所有学生的所有信息
select *
  from tb_student;
  
select stu_id
     , stu_name
     , stu_sex
     , stu_birth
     , stu_addr
     , col_id
  from tb_student;

-- 02. 查询学生的学号、姓名和籍贯(投影和别名)
select stu_id as 学号
     , stu_name as 姓名
     , stu_addr as 籍贯
  from tb_student;

-- 03. 查询所有课程的名称及学分(投影和别名)
select cou_name as 课程名称
     , cou_credit as 学分
  from tb_course;

-- 04. 查询所有女学生的姓名和出生日期(数据筛选)
select stu_name
     , stu_birth
  from tb_student
 where stu_sex = 0;

-- 05. 查询籍贯为“四川成都”的女学生的姓名和出生日期(数据筛选)
select stu_name
     , stu_birth
  from tb_student
 where stu_sex = 0 and stu_addr = &#39;四川成都&#39;;

-- 06. 查询籍贯为“四川成都”或者性别是女的学生(数据筛选)
select stu_name
     , stu_birth
  from tb_student
 where stu_sex = 0 or stu_addr = &#39;四川成都&#39;;

-- 07. 查询所有80后学生的姓名、性别和出生日期(数据筛选)
select stu_name
     , stu_sex
     , stu_birth
  from tb_student
 where &#39;1980-1-1&#39; &lt;= stu_birth and stu_birth &lt;= &#39;1989-12-31&#39;;
 
select stu_name
     , stu_sex
     , stu_birth
  from tb_student
 where stu_birth between &#39;1980-1-1&#39; and &#39;1989-12-31&#39;;

-- MySQL方言
select stu_name
     , if(stu_sex, &#39;男&#39;, &#39;女&#39;) as stu_sex
     , stu_birth
  from tb_student
 where stu_birth between &#39;1980-1-1&#39; and &#39;1989-12-31&#39;;

select stu_name
     , case stu_sex 
            when 1 then &#39;男&#39; 
            else &#39;女&#39;
	   end as stu_sex
     , stu_birth
  from tb_student
 where stu_birth between &#39;1980-1-1&#39; and &#39;1989-12-31&#39;;

-- 08. 查询学分大于2分的课程名称和学分(数据筛选)
select cou_name
     , cou_credit
  from tb_course
 where cou_credit &gt; 2;

-- 09. 查询学分是奇数的课程的名称和学分(数据筛选)
select cou_name
     , cou_credit
  from tb_course
 where cou_credit mod 2 &lt;&gt; 0;

-- 10. 查询选择选了1111的课程考试成绩在90分以上的学生学号(数据筛选)
select stu_id
  from tb_record
 where cou_id = 1111 and score &gt; 90;

-- 11. 查询名字叫“杨过”的学生的姓名和性别
select stu_name
     , stu_sex
  from tb_student
 where stu_name = &#39;杨过&#39;;
    
-- 12. 查询姓“杨”的学生姓名和性别(模糊查询)
-- wild card - 通配符 - % - 代表零个或任意多个字符
select stu_name
     , stu_sex
  from tb_student
 where stu_name like &#39;杨%&#39;;

-- 13. 查询姓“杨”名字两个字的学生姓名和性别(模糊查询)
-- wild card - 通配符 - _ - 精确匹配一个字符
select stu_name
     , stu_sex
  from tb_student
 where stu_name like &#39;杨_&#39;;

-- 14. 查询姓“杨”名字三个字的学生姓名和性别(模糊查询)
select stu_name
     , stu_sex
  from tb_student
 where stu_name like &#39;杨__&#39;;

-- 15. 查询名字中有“不”字或“嫣”字的学生的姓名(模糊查询)
select stu_name
  from tb_student
 where stu_name like &#39;%不%&#39; or stu_name like &#39;%嫣%&#39;;
 
select stu_name
  from tb_student
 where stu_name like &#39;%不%&#39;
 union
select stu_name
  from tb_student
 where stu_name like &#39;%嫣%&#39;;
 
update tb_student
   set stu_name = &#39;岳不嫣&#39;
 where stu_id = 1572;

select stu_name
  from tb_student
 where stu_name like &#39;%不%&#39;
 union all
select stu_name
  from tb_student
 where stu_name like &#39;%嫣%&#39;;

-- 16. 查询姓“杨”或姓“林”名字三个字的学生的姓名(正则表达式模糊查询)
-- regular expression
select stu_name
  from tb_student
 where stu_name regexp &#39;[杨林][\\\\u4e00-\\\\u9fa5]{2}&#39;;

-- 17. 查询没有录入籍贯的学生姓名(空值处理)
select stu_name
  from tb_student
 where stu_addr is null or trim(stu_addr) = &#39;&#39;;
 
update tb_student
   set stu_addr = &#39; &#39;
 where stu_id = 1572;

-- 18. 查询录入了籍贯的学生姓名(空值处理)
select stu_name
  from tb_student
 where stu_addr is not null and trim(stu_addr) &lt;&gt; &#39;&#39;;

-- 19. 查询学生选课的所有日期(去重)
select distinct sel_date
  from tb_record;

-- 20. 查询学生的籍贯(空值处理和去重)
select distinct stu_addr
  from tb_student
 where stu_addr is not null and trim(stu_addr) &lt;&gt; &#39;&#39;;

-- 21. 查询男学生的姓名和生日按年龄从大到小排列(排序)
-- ascending / descending
select stu_name
     , stu_birth
  from tb_student
 where stu_sex = 1
 order by stu_birth asc;

-- 22. 将上面查询中的生日换算成年龄(日期函数、数值函数)
-- 获取当前日期：curdate()
-- 计算时间差：timestampdiff(unit, date1, date2)
select stu_name
     , timestampdiff(year, stu_birth, curdate()) as stu_age
  from tb_student
 where stu_sex = 1
 order by stu_age desc;

-- 聚合函数：max / min / avg / sum / count / std / variance
-- 聚合函数会自动忽略掉null
-- 23. 查询年龄最大的学生的出生日期(聚合函数)
select min(stu_birth)
  from tb_student;

-- 24. 查询年龄最小的学生的出生日期(聚合函数)
select max(stu_birth)
  from tb_student;

-- 25. 查询编号为1111的课程考试成绩的最高分(聚合函数)
select max(score)
  from tb_record
 where cou_id = 1111;

-- 26. 查询学号为1001的学生考试成绩的最低分(聚合函数)
select min(score)
  from tb_record
 where stu_id = 1001;

-- 27. 查询学号为1001的学生考试成绩的平均分和标准差(聚合函数)
-- 四舍五入函数：round(num, n)
select round(avg(score), 1) as avg_score
     , round(std(score), 4) as std_score
  from tb_record
 where stu_id = 1001;

-- 28. 查询学号为1001的学生考试成绩的平均分，如果有null值，null值算0分(聚合函数)
select sum(score) / count(*)
  from tb_record
 where stu_id = 1001;

-- 29. 查询男女学生的人数(分组和聚合函数)
select case stu_sex when 1 then &#39;男&#39; else &#39;女&#39; end as stu_sex
     , count(*) as total
  from tb_student
 group by stu_sex;

-- 30. 查询每个学院学生人数(分组和聚合函数)
select col_id
     , count(*) as total
  from tb_student
 group by col_id
  with rollup;

-- 31. 查询每个学院男女学生人数(分组和聚合函数)
select col_id
     , case stu_sex when 1 then &#39;男&#39; else &#39;女&#39; end as stu_sex
     , count(*) as total
  from tb_student
 group by col_id, stu_sex;

-- 32. 查询选课学生的学号和平均成绩(分组和聚合函数)
select stu_id
     , round(avg(score), 1) as avg_score
  from tb_record
 group by stu_id;

-- 33. 查询平均成绩大于等于90分的学生的学号和平均成绩(分组和聚合函数)
-- 结论：分组前的筛选使用where子句，分组后的筛选使用having子句
select stu_id
     , round(avg(score), 1) as avg_score
  from tb_record
 group by stu_id
having avg(score) &gt;= 90;

-- 34. 查询所有课程成绩大于80分的同学的学号(分组和聚合函数)
select stu_id
  from tb_record
 group by stu_id
having min(score) &gt; 80;

-- Error Code: 1242. Subquery returns more than 1 row
select stu_id
	 , stu_name
  from tb_student
 where stu_id in (select stu_id
					from tb_record
				   group by stu_id
				  having min(score) &gt; 80);

-- 35. 查询年龄最大的学生的姓名(嵌套查询)
-- 嵌套查询/子查询：把一个查询的结果作为另外一个查询的一部分来使用
select @a := min(stu_birth)
  from tb_student;
  
select stu_name
  from tb_student
 where stu_birth = @a;
 
select stu_name
  from tb_student
 where stu_birth = (select min(stu_birth)
                      from tb_student);

-- 36. 查询选了两门以上的课程的学生姓名(嵌套查询/分组/数据筛选)
select stu_name
  from tb_student
 where stu_id in (select stu_id
                    from tb_record
                   group by stu_id
                  having count(*) &gt; 2);

-- 37. 查询学生的姓名、生日和所在学院名称(连接查询)
select stu_name
     , stu_birth
     , col_name
  from tb_student, tb_college
 where tb_student.col_id = tb_college.col_id;

select stu_name
     , stu_birth
     , col_name
  from tb_student inner join tb_college
       on tb_student.col_id = tb_college.col_id;

select stu_name
     , stu_birth
     , col_name
  from tb_student natural join tb_college;

-- 38. 查询学生姓名、课程名称以及成绩(连接查询)
select stu_name
     , cou_name
     , score
  from tb_student, tb_course, tb_record
 where tb_student.stu_id = tb_record.stu_id
       and tb_course.cou_id = tb_record.cou_id
       and score is not null;

select stu_name
     , cou_name
     , score
  from tb_student 
	   inner join tb_record
           on tb_student.stu_id = tb_record.stu_id
	   inner join tb_course
           on tb_course.cou_id = tb_record.cou_id
 where score is not null;
 
select stu_name
     , cou_name
     , score
  from tb_student 
       natural join tb_record 
	   natural join tb_course
 where score is not null;
 
-- 39. 上面的查询结果按课程和成绩排序取前5条数据(分页查询)
select stu_name
     , cou_name
     , score
  from tb_student 
       natural join tb_record 
	   natural join tb_course
 where score is not null
 order by cou_id asc, score desc
 limit 5;

-- 40. 上面的查询结果按课程和成绩排序取第6-10条数据(分页查询)
select stu_name
     , cou_name
     , score
  from tb_student 
       natural join tb_record 
	   natural join tb_course
 where score is not null
 order by cou_id asc, score desc
 limit 5
offset 5;

-- 41. 上面的查询结果按课程和成绩排序取第11-15条数据(分页查询)
select stu_name
     , cou_name
     , score
  from tb_student 
       natural join tb_record 
	   natural join tb_course
 where score is not null
 order by cou_id asc, score desc
 limit 5
offset 10;

-- 42. 查询选课学生的姓名和平均成绩(嵌套查询和连接查询)
select stu_name
     , avg_score
  from tb_student
       natural join (select stu_id
						  , avg(score) as avg_score
					   from tb_record
					  group by stu_id) as tmp;

-- 43. 查询学生的姓名和选课的数量(嵌套查询和连接查询)
select stu_name
     , total
  from tb_student
       inner join (select stu_id
						, count(*) as total
					 from tb_record
					group by stu_id) as tmp
	       on tb_student.stu_id = tmp.stu_id;

-- 44. 查询所有学生的姓名和选课数量(左外连接和嵌套查询)
-- 左外连接：把左表（写在join左边的表）所有的数据都拿到，不满足连表条件的地方填充null - left outer join
-- 右外连接：把右表（写在join右边的表）所有的数据都拿到，不满足连表条件的地方填充null - right outer join
-- 全外连接：把左表和右表的数据全部拿到即便它们不满足连表条件，MySQL不支持全外连接 - full outer join
select stu_name
     , coalesce(total, 0) as total
  from tb_student
       left join (select stu_id
					   , count(*) as total
					from tb_record
				   group by stu_id) as tmp
	       on tb_student.stu_id = tmp.stu_id;

-- 45. 查询没有选课的学生的姓名(左外连接和数据筛选)
select stu_name
  from tb_student
       left join tb_record
	       on tb_student.stu_id = tb_record.stu_id
 where tb_record.stu_id is null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的 DQL 有几个地方需要加以说明：</p><ol><li><p>MySQL目前的版本不支持全外连接，上面我们通过<code>union</code>操作，将左外连接和右外连接的结果求并集实现全外连接的效果。大家可以通过下面的图来加深对连表操作的认识。</p><img src="http://localhost/mypic/20211121135117.png" style="zoom:50%;"></li><li><p>MySQL 中支持多种类型的运算符，包括：算术运算符（<code>+</code>、<code>-</code>、<code>*</code>、<code>/</code>、<code>%</code>）、比较运算符（<code>=</code>、<code>&lt;&gt;</code>、<code>&lt;=&gt;</code>、<code>&lt;</code>、<code>&lt;=</code>、<code>&gt;</code>、<code>&gt;=</code>、<code>BETWEEN...AND..</code>.、<code>IN</code>、<code>IS NULL</code>、<code>IS NOT NULL</code>、<code>LIKE</code>、<code>RLIKE</code>、<code>REGEXP</code>）、逻辑运算符（<code>NOT</code>、<code>AND</code>、<code>OR</code>、<code>XOR</code>）和位运算符（<code>&amp;</code>、<code>|</code>、<code>^</code>、<code>~</code>、<code>&gt;&gt;</code>、<code>&lt;&lt;</code>），我们可以在 DML 中使用这些运算符处理数据。</p></li><li><p>在查询数据时，可以在<code>SELECT</code>语句及其子句（如<code>WHERE</code>子句、<code>ORDER BY</code>子句、<code>HAVING</code>子句等）中使用函数，这些函数包括字符串函数、数值函数、时间日期函数、流程函数等，如下面的表格所示。</p><p>常用字符串函数。</p><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>CONCAT</code></td><td>将多个字符串连接成一个字符串</td></tr><tr><td><code>FORMAT</code></td><td>将数值格式化成字符串并指定保留几位小数</td></tr><tr><td><code>FROM_BASE64</code> / <code>TO_BASE64</code></td><td>BASE64解码/编码</td></tr><tr><td><code>BIN</code> / <code>OCT</code> / <code>HEX</code></td><td>将数值转换成二进制/八进制/十六进制字符串</td></tr><tr><td><code>LOCATE</code></td><td>在字符串中查找一个子串的位置</td></tr><tr><td><code>LEFT</code> / <code>RIGHT</code></td><td>返回一个字符串左边/右边指定长度的字符</td></tr><tr><td><code>LENGTH</code> / <code>CHAR_LENGTH</code></td><td>返回字符串的长度以字节/字符为单位</td></tr><tr><td><code>LOWER</code> / <code>UPPER</code></td><td>返回字符串的小写/大写形式</td></tr><tr><td><code>LPAD</code> / <code>RPAD</code></td><td>如果字符串的长度不足，在字符串左边/右边填充指定的字符</td></tr><tr><td><code>LTRIM</code> / <code>RTRIM</code></td><td>去掉字符串前面/后面的空格</td></tr><tr><td><code>ORD</code> / <code>CHAR</code></td><td>返回字符对应的编码/返回编码对应的字符</td></tr><tr><td><code>STRCMP</code></td><td>比较字符串，返回-1、0、1分别表示小于、等于、大于</td></tr><tr><td><code>SUBSTRING</code></td><td>返回字符串指定范围的子串</td></tr></tbody></table><p>常用数值函数。</p><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>ABS</code></td><td>返回一个数的绝度值</td></tr><tr><td><code>CEILING</code> / <code>FLOOR</code></td><td>返回一个数上取整/下取整的结果</td></tr><tr><td><code>CONV</code></td><td>将一个数从一种进制转换成另一种进制</td></tr><tr><td><code>CRC32</code></td><td>计算循环冗余校验码</td></tr><tr><td><code>EXP</code> / <code>LOG</code> / <code>LOG2</code> / <code>LOG10</code></td><td>计算指数/对数</td></tr><tr><td><code>POW</code></td><td>求幂</td></tr><tr><td><code>RAND</code></td><td>返回[0,1)范围的随机数</td></tr><tr><td><code>ROUND</code></td><td>返回一个数四舍五入后的结果</td></tr><tr><td><code>SQRT</code></td><td>返回一个数的平方根</td></tr><tr><td><code>TRUNCATE</code></td><td>截断一个数到指定的精度</td></tr><tr><td><code>SIN</code> / <code>COS</code> / <code>TAN</code> / <code>COT</code> / <code>ASIN</code> / <code>ACOS</code> / <code>ATAN</code></td><td>三角函数</td></tr></tbody></table><p>常用时间日期函数。</p><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>CURDATE</code> / <code>CURTIME</code> / <code>NOW</code></td><td>获取当前日期/时间/日期和时间</td></tr><tr><td><code>ADDDATE</code> / <code>SUBDATE</code></td><td>将两个日期表达式相加/相减并返回结果</td></tr><tr><td><code>DATE</code> / <code>TIME</code></td><td>从字符串中获取日期/时间</td></tr><tr><td><code>YEAR</code> / <code>MONTH</code> / <code>DAY</code></td><td>从日期中获取年/月/日</td></tr><tr><td><code>HOUR</code> / <code>MINUTE</code> / <code>SECOND</code></td><td>从时间中获取时/分/秒</td></tr><tr><td><code>DATEDIFF</code> / <code>TIMEDIFF</code></td><td>返回两个时间日期表达式相差多少天/小时</td></tr><tr><td><code>MAKEDATE</code> / <code>MAKETIME</code></td><td>制造一个日期/时间</td></tr></tbody></table><p>常用流程函数。</p><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>IF</code></td><td>根据条件是否成立返回不同的值</td></tr><tr><td><code>IFNULL</code></td><td>如果为NULL则返回指定的值否则就返回本身</td></tr><tr><td><code>NULLIF</code></td><td>两个表达式相等就返回NULL否则返回第一个表达式的值</td></tr></tbody></table><p>其他常用函数。</p><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>MD5</code> / <code>SHA1</code> / <code>SHA2</code></td><td>返回字符串对应的哈希摘要</td></tr><tr><td><code>CHARSET</code> / <code>COLLATION</code></td><td>返回字符集/校对规则</td></tr><tr><td><code>USER</code> / <code>CURRENT_USER</code></td><td>返回当前用户</td></tr><tr><td><code>DATABASE</code></td><td>返回当前数据库名</td></tr><tr><td><code>VERSION</code></td><td>返回当前数据库版本</td></tr><tr><td><code>FOUND_ROWS</code> / <code>ROW_COUNT</code></td><td>返回查询到的行数/受影响的行数</td></tr><tr><td><code>LAST_INSERT_ID</code></td><td>返回最后一个自增主键的值</td></tr><tr><td><code>UUID</code> / <code>UUID_SHORT</code></td><td>返回全局唯一标识符</td></tr></tbody></table></li></ol>`,5),t=[l];function c(r,v){return n(),d("div",null,t)}const m=e(s,[["render",c],["__file","第43课.SQL详解之DQL.html.vue"]]);export{m as default};
