/**
 * 限流类型
 *
 * @author erhu
 */
export enum LimitType {
    /**
     * 默认策略全局限流
     */
    DEFAULT = 'DEFAULT',

    /**
     * 根据请求者IP进行限流
     */
    IP = 'IP'
}