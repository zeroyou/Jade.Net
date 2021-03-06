﻿/*
********************************************************************
*
*    曹旭升（sheng.c）
*    E-mail: cao.silhouette@msn.com
*    QQ: 279060597
*    https://github.com/iccb1013
*    http://shengxunwei.com r
*

*
********************************************************************/


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jade.Model.Dto
{
    public class Push_HistoryInListDto
    {
        public int id { get; set; }
        public int push_message_id { get; set; }
        public string title { get; set; }
        public bool android_push_state { get; set; }
        public bool ios_push_state { get; set; }
        public System.DateTime create_time { get; set; }
        public string description { get; set; }
        public int type { get; set; }
        public int user_id { get; set; }


        //////////////////////////////

        public string user_name
        {
            get;set;
        }

        public string typeText
        {
            get
            {
                switch (type)
                {
                    case 0:
                        return "打开APP";
                    case 1:
                        return "打开图文";
                    default:
                        return "未知：" + type;
                }
            }
        }
    }
}
