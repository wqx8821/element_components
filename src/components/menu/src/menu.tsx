import { defineComponent, PropType, useAttrs } from 'vue';
import { ElMenu, ElSubMenu, ElMenuItem } from 'element-plus';
import { MenuItem } from './types';

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    defaultActive: {
      type: String,
      default: '',
    },
    router: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    // 渲染无限层级菜单方法
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item) => {
        // 插槽
        let slots = {
          title: () => (
            <>
              <item.icon />
              <span>{item.name}</span>
            </>
          ),
        };

        if (item.children && item.children.length) {
          return (
            <ElSubMenu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </ElSubMenu>
          );
        }

        return (
          <ElMenuItem index={item.index}>
            <item.icon />
            <span>{item.name}</span>
          </ElMenuItem>
        );
      });
    };
    // 剩余参数
    let attrs = useAttrs();
    return () => {
      return (
        <ElMenu defaultActive={props.defaultActive} router={props.router} {...attrs}>
          {renderMenu(props.data)}
        </ElMenu>
      );
    };
  },
});
