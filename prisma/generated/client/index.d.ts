
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model childs
 * 
 */
export type childs = $Result.DefaultSelection<Prisma.$childsPayload>
/**
 * Model gejala
 * 
 */
export type gejala = $Result.DefaultSelection<Prisma.$gejalaPayload>
/**
 * Model diagnosa
 * 
 */
export type diagnosa = $Result.DefaultSelection<Prisma.$diagnosaPayload>
/**
 * Model detail_diagnosa
 * 
 */
export type detail_diagnosa = $Result.DefaultSelection<Prisma.$detail_diagnosaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.childs`: Exposes CRUD operations for the **childs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Childs
    * const childs = await prisma.childs.findMany()
    * ```
    */
  get childs(): Prisma.childsDelegate<ExtArgs>;

  /**
   * `prisma.gejala`: Exposes CRUD operations for the **gejala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gejalas
    * const gejalas = await prisma.gejala.findMany()
    * ```
    */
  get gejala(): Prisma.gejalaDelegate<ExtArgs>;

  /**
   * `prisma.diagnosa`: Exposes CRUD operations for the **diagnosa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnosas
    * const diagnosas = await prisma.diagnosa.findMany()
    * ```
    */
  get diagnosa(): Prisma.diagnosaDelegate<ExtArgs>;

  /**
   * `prisma.detail_diagnosa`: Exposes CRUD operations for the **detail_diagnosa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detail_diagnosas
    * const detail_diagnosas = await prisma.detail_diagnosa.findMany()
    * ```
    */
  get detail_diagnosa(): Prisma.detail_diagnosaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    childs: 'childs',
    gejala: 'gejala',
    diagnosa: 'diagnosa',
    detail_diagnosa: 'detail_diagnosa'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "childs" | "gejala" | "diagnosa" | "detail_diagnosa"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      childs: {
        payload: Prisma.$childsPayload<ExtArgs>
        fields: Prisma.childsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.childsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$childsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.childsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$childsPayload>
          }
          findFirst: {
            args: Prisma.childsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$childsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.childsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$childsPayload>
          }
          findMany: {
            args: Prisma.childsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$childsPayload>[]
          }
          create: {
            args: Prisma.childsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$childsPayload>
          }
          createMany: {
            args: Prisma.childsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.childsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$childsPayload>
          }
          update: {
            args: Prisma.childsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$childsPayload>
          }
          deleteMany: {
            args: Prisma.childsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.childsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.childsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$childsPayload>
          }
          aggregate: {
            args: Prisma.ChildsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChilds>
          }
          groupBy: {
            args: Prisma.childsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChildsGroupByOutputType>[]
          }
          count: {
            args: Prisma.childsCountArgs<ExtArgs>
            result: $Utils.Optional<ChildsCountAggregateOutputType> | number
          }
        }
      }
      gejala: {
        payload: Prisma.$gejalaPayload<ExtArgs>
        fields: Prisma.gejalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gejalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gejalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gejalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gejalaPayload>
          }
          findFirst: {
            args: Prisma.gejalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gejalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gejalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gejalaPayload>
          }
          findMany: {
            args: Prisma.gejalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gejalaPayload>[]
          }
          create: {
            args: Prisma.gejalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gejalaPayload>
          }
          createMany: {
            args: Prisma.gejalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.gejalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gejalaPayload>
          }
          update: {
            args: Prisma.gejalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gejalaPayload>
          }
          deleteMany: {
            args: Prisma.gejalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gejalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gejalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gejalaPayload>
          }
          aggregate: {
            args: Prisma.GejalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGejala>
          }
          groupBy: {
            args: Prisma.gejalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<GejalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.gejalaCountArgs<ExtArgs>
            result: $Utils.Optional<GejalaCountAggregateOutputType> | number
          }
        }
      }
      diagnosa: {
        payload: Prisma.$diagnosaPayload<ExtArgs>
        fields: Prisma.diagnosaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.diagnosaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.diagnosaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosaPayload>
          }
          findFirst: {
            args: Prisma.diagnosaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.diagnosaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosaPayload>
          }
          findMany: {
            args: Prisma.diagnosaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosaPayload>[]
          }
          create: {
            args: Prisma.diagnosaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosaPayload>
          }
          createMany: {
            args: Prisma.diagnosaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.diagnosaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosaPayload>
          }
          update: {
            args: Prisma.diagnosaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosaPayload>
          }
          deleteMany: {
            args: Prisma.diagnosaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.diagnosaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.diagnosaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosaPayload>
          }
          aggregate: {
            args: Prisma.DiagnosaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosa>
          }
          groupBy: {
            args: Prisma.diagnosaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosaGroupByOutputType>[]
          }
          count: {
            args: Prisma.diagnosaCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosaCountAggregateOutputType> | number
          }
        }
      }
      detail_diagnosa: {
        payload: Prisma.$detail_diagnosaPayload<ExtArgs>
        fields: Prisma.detail_diagnosaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detail_diagnosaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_diagnosaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detail_diagnosaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_diagnosaPayload>
          }
          findFirst: {
            args: Prisma.detail_diagnosaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_diagnosaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detail_diagnosaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_diagnosaPayload>
          }
          findMany: {
            args: Prisma.detail_diagnosaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_diagnosaPayload>[]
          }
          create: {
            args: Prisma.detail_diagnosaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_diagnosaPayload>
          }
          createMany: {
            args: Prisma.detail_diagnosaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.detail_diagnosaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_diagnosaPayload>
          }
          update: {
            args: Prisma.detail_diagnosaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_diagnosaPayload>
          }
          deleteMany: {
            args: Prisma.detail_diagnosaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detail_diagnosaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.detail_diagnosaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_diagnosaPayload>
          }
          aggregate: {
            args: Prisma.Detail_diagnosaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetail_diagnosa>
          }
          groupBy: {
            args: Prisma.detail_diagnosaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detail_diagnosaGroupByOutputType>[]
          }
          count: {
            args: Prisma.detail_diagnosaCountArgs<ExtArgs>
            result: $Utils.Optional<Detail_diagnosaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Childs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Childs?: boolean | UsersCountOutputTypeCountChildsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: childsWhereInput
  }


  /**
   * Count Type ChildsCountOutputType
   */

  export type ChildsCountOutputType = {
    Diagnosa: number
  }

  export type ChildsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diagnosa?: boolean | ChildsCountOutputTypeCountDiagnosaArgs
  }

  // Custom InputTypes
  /**
   * ChildsCountOutputType without action
   */
  export type ChildsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChildsCountOutputType
     */
    select?: ChildsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChildsCountOutputType without action
   */
  export type ChildsCountOutputTypeCountDiagnosaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosaWhereInput
  }


  /**
   * Count Type GejalaCountOutputType
   */

  export type GejalaCountOutputType = {
    DetailDiagnosa: number
  }

  export type GejalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetailDiagnosa?: boolean | GejalaCountOutputTypeCountDetailDiagnosaArgs
  }

  // Custom InputTypes
  /**
   * GejalaCountOutputType without action
   */
  export type GejalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GejalaCountOutputType
     */
    select?: GejalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GejalaCountOutputType without action
   */
  export type GejalaCountOutputTypeCountDetailDiagnosaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_diagnosaWhereInput
  }


  /**
   * Count Type DiagnosaCountOutputType
   */

  export type DiagnosaCountOutputType = {
    DetailDiagnosa: number
  }

  export type DiagnosaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetailDiagnosa?: boolean | DiagnosaCountOutputTypeCountDetailDiagnosaArgs
  }

  // Custom InputTypes
  /**
   * DiagnosaCountOutputType without action
   */
  export type DiagnosaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosaCountOutputType
     */
    select?: DiagnosaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosaCountOutputType without action
   */
  export type DiagnosaCountOutputTypeCountDetailDiagnosaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_diagnosaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    Childs?: boolean | users$ChildsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Childs?: boolean | users$ChildsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      Childs: Prisma.$childsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Childs<T extends users$ChildsArgs<ExtArgs> = {}>(args?: Subset<T, users$ChildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$childsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.Childs
   */
  export type users$ChildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
    where?: childsWhereInput
    orderBy?: childsOrderByWithRelationInput | childsOrderByWithRelationInput[]
    cursor?: childsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChildsScalarFieldEnum | ChildsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model childs
   */

  export type AggregateChilds = {
    _count: ChildsCountAggregateOutputType | null
    _avg: ChildsAvgAggregateOutputType | null
    _sum: ChildsSumAggregateOutputType | null
    _min: ChildsMinAggregateOutputType | null
    _max: ChildsMaxAggregateOutputType | null
  }

  export type ChildsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ChildsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ChildsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    nama_anak: string | null
    tanggal_lahir: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChildsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    nama_anak: string | null
    tanggal_lahir: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChildsCountAggregateOutputType = {
    id: number
    user_id: number
    nama_anak: number
    tanggal_lahir: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChildsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ChildsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ChildsMinAggregateInputType = {
    id?: true
    user_id?: true
    nama_anak?: true
    tanggal_lahir?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChildsMaxAggregateInputType = {
    id?: true
    user_id?: true
    nama_anak?: true
    tanggal_lahir?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChildsCountAggregateInputType = {
    id?: true
    user_id?: true
    nama_anak?: true
    tanggal_lahir?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChildsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which childs to aggregate.
     */
    where?: childsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of childs to fetch.
     */
    orderBy?: childsOrderByWithRelationInput | childsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: childsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` childs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` childs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned childs
    **/
    _count?: true | ChildsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChildsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChildsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChildsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChildsMaxAggregateInputType
  }

  export type GetChildsAggregateType<T extends ChildsAggregateArgs> = {
        [P in keyof T & keyof AggregateChilds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChilds[P]>
      : GetScalarType<T[P], AggregateChilds[P]>
  }




  export type childsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: childsWhereInput
    orderBy?: childsOrderByWithAggregationInput | childsOrderByWithAggregationInput[]
    by: ChildsScalarFieldEnum[] | ChildsScalarFieldEnum
    having?: childsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChildsCountAggregateInputType | true
    _avg?: ChildsAvgAggregateInputType
    _sum?: ChildsSumAggregateInputType
    _min?: ChildsMinAggregateInputType
    _max?: ChildsMaxAggregateInputType
  }

  export type ChildsGroupByOutputType = {
    id: number
    user_id: number
    nama_anak: string
    tanggal_lahir: Date
    createdAt: Date
    updatedAt: Date
    _count: ChildsCountAggregateOutputType | null
    _avg: ChildsAvgAggregateOutputType | null
    _sum: ChildsSumAggregateOutputType | null
    _min: ChildsMinAggregateOutputType | null
    _max: ChildsMaxAggregateOutputType | null
  }

  type GetChildsGroupByPayload<T extends childsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChildsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChildsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChildsGroupByOutputType[P]>
            : GetScalarType<T[P], ChildsGroupByOutputType[P]>
        }
      >
    >


  export type childsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    nama_anak?: boolean
    tanggal_lahir?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | childs$UsersArgs<ExtArgs>
    Diagnosa?: boolean | childs$DiagnosaArgs<ExtArgs>
    _count?: boolean | ChildsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["childs"]>


  export type childsSelectScalar = {
    id?: boolean
    user_id?: boolean
    nama_anak?: boolean
    tanggal_lahir?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type childsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | childs$UsersArgs<ExtArgs>
    Diagnosa?: boolean | childs$DiagnosaArgs<ExtArgs>
    _count?: boolean | ChildsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $childsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "childs"
    objects: {
      Users: Prisma.$usersPayload<ExtArgs> | null
      Diagnosa: Prisma.$diagnosaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      nama_anak: string
      tanggal_lahir: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["childs"]>
    composites: {}
  }

  type childsGetPayload<S extends boolean | null | undefined | childsDefaultArgs> = $Result.GetResult<Prisma.$childsPayload, S>

  type childsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<childsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChildsCountAggregateInputType | true
    }

  export interface childsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['childs'], meta: { name: 'childs' } }
    /**
     * Find zero or one Childs that matches the filter.
     * @param {childsFindUniqueArgs} args - Arguments to find a Childs
     * @example
     * // Get one Childs
     * const childs = await prisma.childs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends childsFindUniqueArgs>(args: SelectSubset<T, childsFindUniqueArgs<ExtArgs>>): Prisma__childsClient<$Result.GetResult<Prisma.$childsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Childs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {childsFindUniqueOrThrowArgs} args - Arguments to find a Childs
     * @example
     * // Get one Childs
     * const childs = await prisma.childs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends childsFindUniqueOrThrowArgs>(args: SelectSubset<T, childsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__childsClient<$Result.GetResult<Prisma.$childsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Childs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {childsFindFirstArgs} args - Arguments to find a Childs
     * @example
     * // Get one Childs
     * const childs = await prisma.childs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends childsFindFirstArgs>(args?: SelectSubset<T, childsFindFirstArgs<ExtArgs>>): Prisma__childsClient<$Result.GetResult<Prisma.$childsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Childs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {childsFindFirstOrThrowArgs} args - Arguments to find a Childs
     * @example
     * // Get one Childs
     * const childs = await prisma.childs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends childsFindFirstOrThrowArgs>(args?: SelectSubset<T, childsFindFirstOrThrowArgs<ExtArgs>>): Prisma__childsClient<$Result.GetResult<Prisma.$childsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Childs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {childsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Childs
     * const childs = await prisma.childs.findMany()
     * 
     * // Get first 10 Childs
     * const childs = await prisma.childs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const childsWithIdOnly = await prisma.childs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends childsFindManyArgs>(args?: SelectSubset<T, childsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$childsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Childs.
     * @param {childsCreateArgs} args - Arguments to create a Childs.
     * @example
     * // Create one Childs
     * const Childs = await prisma.childs.create({
     *   data: {
     *     // ... data to create a Childs
     *   }
     * })
     * 
     */
    create<T extends childsCreateArgs>(args: SelectSubset<T, childsCreateArgs<ExtArgs>>): Prisma__childsClient<$Result.GetResult<Prisma.$childsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Childs.
     * @param {childsCreateManyArgs} args - Arguments to create many Childs.
     * @example
     * // Create many Childs
     * const childs = await prisma.childs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends childsCreateManyArgs>(args?: SelectSubset<T, childsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Childs.
     * @param {childsDeleteArgs} args - Arguments to delete one Childs.
     * @example
     * // Delete one Childs
     * const Childs = await prisma.childs.delete({
     *   where: {
     *     // ... filter to delete one Childs
     *   }
     * })
     * 
     */
    delete<T extends childsDeleteArgs>(args: SelectSubset<T, childsDeleteArgs<ExtArgs>>): Prisma__childsClient<$Result.GetResult<Prisma.$childsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Childs.
     * @param {childsUpdateArgs} args - Arguments to update one Childs.
     * @example
     * // Update one Childs
     * const childs = await prisma.childs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends childsUpdateArgs>(args: SelectSubset<T, childsUpdateArgs<ExtArgs>>): Prisma__childsClient<$Result.GetResult<Prisma.$childsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Childs.
     * @param {childsDeleteManyArgs} args - Arguments to filter Childs to delete.
     * @example
     * // Delete a few Childs
     * const { count } = await prisma.childs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends childsDeleteManyArgs>(args?: SelectSubset<T, childsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Childs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {childsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Childs
     * const childs = await prisma.childs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends childsUpdateManyArgs>(args: SelectSubset<T, childsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Childs.
     * @param {childsUpsertArgs} args - Arguments to update or create a Childs.
     * @example
     * // Update or create a Childs
     * const childs = await prisma.childs.upsert({
     *   create: {
     *     // ... data to create a Childs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Childs we want to update
     *   }
     * })
     */
    upsert<T extends childsUpsertArgs>(args: SelectSubset<T, childsUpsertArgs<ExtArgs>>): Prisma__childsClient<$Result.GetResult<Prisma.$childsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Childs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {childsCountArgs} args - Arguments to filter Childs to count.
     * @example
     * // Count the number of Childs
     * const count = await prisma.childs.count({
     *   where: {
     *     // ... the filter for the Childs we want to count
     *   }
     * })
    **/
    count<T extends childsCountArgs>(
      args?: Subset<T, childsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChildsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Childs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChildsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChildsAggregateArgs>(args: Subset<T, ChildsAggregateArgs>): Prisma.PrismaPromise<GetChildsAggregateType<T>>

    /**
     * Group by Childs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {childsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends childsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: childsGroupByArgs['orderBy'] }
        : { orderBy?: childsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, childsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChildsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the childs model
   */
  readonly fields: childsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for childs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__childsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends childs$UsersArgs<ExtArgs> = {}>(args?: Subset<T, childs$UsersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Diagnosa<T extends childs$DiagnosaArgs<ExtArgs> = {}>(args?: Subset<T, childs$DiagnosaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the childs model
   */ 
  interface childsFieldRefs {
    readonly id: FieldRef<"childs", 'Int'>
    readonly user_id: FieldRef<"childs", 'Int'>
    readonly nama_anak: FieldRef<"childs", 'String'>
    readonly tanggal_lahir: FieldRef<"childs", 'DateTime'>
    readonly createdAt: FieldRef<"childs", 'DateTime'>
    readonly updatedAt: FieldRef<"childs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * childs findUnique
   */
  export type childsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
    /**
     * Filter, which childs to fetch.
     */
    where: childsWhereUniqueInput
  }

  /**
   * childs findUniqueOrThrow
   */
  export type childsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
    /**
     * Filter, which childs to fetch.
     */
    where: childsWhereUniqueInput
  }

  /**
   * childs findFirst
   */
  export type childsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
    /**
     * Filter, which childs to fetch.
     */
    where?: childsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of childs to fetch.
     */
    orderBy?: childsOrderByWithRelationInput | childsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for childs.
     */
    cursor?: childsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` childs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` childs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of childs.
     */
    distinct?: ChildsScalarFieldEnum | ChildsScalarFieldEnum[]
  }

  /**
   * childs findFirstOrThrow
   */
  export type childsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
    /**
     * Filter, which childs to fetch.
     */
    where?: childsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of childs to fetch.
     */
    orderBy?: childsOrderByWithRelationInput | childsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for childs.
     */
    cursor?: childsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` childs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` childs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of childs.
     */
    distinct?: ChildsScalarFieldEnum | ChildsScalarFieldEnum[]
  }

  /**
   * childs findMany
   */
  export type childsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
    /**
     * Filter, which childs to fetch.
     */
    where?: childsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of childs to fetch.
     */
    orderBy?: childsOrderByWithRelationInput | childsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing childs.
     */
    cursor?: childsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` childs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` childs.
     */
    skip?: number
    distinct?: ChildsScalarFieldEnum | ChildsScalarFieldEnum[]
  }

  /**
   * childs create
   */
  export type childsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
    /**
     * The data needed to create a childs.
     */
    data: XOR<childsCreateInput, childsUncheckedCreateInput>
  }

  /**
   * childs createMany
   */
  export type childsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many childs.
     */
    data: childsCreateManyInput | childsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * childs update
   */
  export type childsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
    /**
     * The data needed to update a childs.
     */
    data: XOR<childsUpdateInput, childsUncheckedUpdateInput>
    /**
     * Choose, which childs to update.
     */
    where: childsWhereUniqueInput
  }

  /**
   * childs updateMany
   */
  export type childsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update childs.
     */
    data: XOR<childsUpdateManyMutationInput, childsUncheckedUpdateManyInput>
    /**
     * Filter which childs to update
     */
    where?: childsWhereInput
  }

  /**
   * childs upsert
   */
  export type childsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
    /**
     * The filter to search for the childs to update in case it exists.
     */
    where: childsWhereUniqueInput
    /**
     * In case the childs found by the `where` argument doesn't exist, create a new childs with this data.
     */
    create: XOR<childsCreateInput, childsUncheckedCreateInput>
    /**
     * In case the childs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<childsUpdateInput, childsUncheckedUpdateInput>
  }

  /**
   * childs delete
   */
  export type childsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
    /**
     * Filter which childs to delete.
     */
    where: childsWhereUniqueInput
  }

  /**
   * childs deleteMany
   */
  export type childsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which childs to delete
     */
    where?: childsWhereInput
  }

  /**
   * childs.Users
   */
  export type childs$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * childs.Diagnosa
   */
  export type childs$DiagnosaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosa
     */
    select?: diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosaInclude<ExtArgs> | null
    where?: diagnosaWhereInput
    orderBy?: diagnosaOrderByWithRelationInput | diagnosaOrderByWithRelationInput[]
    cursor?: diagnosaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosaScalarFieldEnum | DiagnosaScalarFieldEnum[]
  }

  /**
   * childs without action
   */
  export type childsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
  }


  /**
   * Model gejala
   */

  export type AggregateGejala = {
    _count: GejalaCountAggregateOutputType | null
    _avg: GejalaAvgAggregateOutputType | null
    _sum: GejalaSumAggregateOutputType | null
    _min: GejalaMinAggregateOutputType | null
    _max: GejalaMaxAggregateOutputType | null
  }

  export type GejalaAvgAggregateOutputType = {
    id: number | null
    cf_pakar: number | null
  }

  export type GejalaSumAggregateOutputType = {
    id: number | null
    cf_pakar: number | null
  }

  export type GejalaMinAggregateOutputType = {
    id: number | null
    gejala_id: string | null
    nama_gejala: string | null
    cf_pakar: number | null
    isDisabled: boolean | null
  }

  export type GejalaMaxAggregateOutputType = {
    id: number | null
    gejala_id: string | null
    nama_gejala: string | null
    cf_pakar: number | null
    isDisabled: boolean | null
  }

  export type GejalaCountAggregateOutputType = {
    id: number
    gejala_id: number
    nama_gejala: number
    cf_pakar: number
    isDisabled: number
    _all: number
  }


  export type GejalaAvgAggregateInputType = {
    id?: true
    cf_pakar?: true
  }

  export type GejalaSumAggregateInputType = {
    id?: true
    cf_pakar?: true
  }

  export type GejalaMinAggregateInputType = {
    id?: true
    gejala_id?: true
    nama_gejala?: true
    cf_pakar?: true
    isDisabled?: true
  }

  export type GejalaMaxAggregateInputType = {
    id?: true
    gejala_id?: true
    nama_gejala?: true
    cf_pakar?: true
    isDisabled?: true
  }

  export type GejalaCountAggregateInputType = {
    id?: true
    gejala_id?: true
    nama_gejala?: true
    cf_pakar?: true
    isDisabled?: true
    _all?: true
  }

  export type GejalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gejala to aggregate.
     */
    where?: gejalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gejalas to fetch.
     */
    orderBy?: gejalaOrderByWithRelationInput | gejalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gejalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gejalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gejalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gejalas
    **/
    _count?: true | GejalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GejalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GejalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GejalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GejalaMaxAggregateInputType
  }

  export type GetGejalaAggregateType<T extends GejalaAggregateArgs> = {
        [P in keyof T & keyof AggregateGejala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGejala[P]>
      : GetScalarType<T[P], AggregateGejala[P]>
  }




  export type gejalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gejalaWhereInput
    orderBy?: gejalaOrderByWithAggregationInput | gejalaOrderByWithAggregationInput[]
    by: GejalaScalarFieldEnum[] | GejalaScalarFieldEnum
    having?: gejalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GejalaCountAggregateInputType | true
    _avg?: GejalaAvgAggregateInputType
    _sum?: GejalaSumAggregateInputType
    _min?: GejalaMinAggregateInputType
    _max?: GejalaMaxAggregateInputType
  }

  export type GejalaGroupByOutputType = {
    id: number
    gejala_id: string
    nama_gejala: string
    cf_pakar: number
    isDisabled: boolean
    _count: GejalaCountAggregateOutputType | null
    _avg: GejalaAvgAggregateOutputType | null
    _sum: GejalaSumAggregateOutputType | null
    _min: GejalaMinAggregateOutputType | null
    _max: GejalaMaxAggregateOutputType | null
  }

  type GetGejalaGroupByPayload<T extends gejalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GejalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GejalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GejalaGroupByOutputType[P]>
            : GetScalarType<T[P], GejalaGroupByOutputType[P]>
        }
      >
    >


  export type gejalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gejala_id?: boolean
    nama_gejala?: boolean
    cf_pakar?: boolean
    isDisabled?: boolean
    DetailDiagnosa?: boolean | gejala$DetailDiagnosaArgs<ExtArgs>
    _count?: boolean | GejalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gejala"]>


  export type gejalaSelectScalar = {
    id?: boolean
    gejala_id?: boolean
    nama_gejala?: boolean
    cf_pakar?: boolean
    isDisabled?: boolean
  }

  export type gejalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetailDiagnosa?: boolean | gejala$DetailDiagnosaArgs<ExtArgs>
    _count?: boolean | GejalaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $gejalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gejala"
    objects: {
      DetailDiagnosa: Prisma.$detail_diagnosaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gejala_id: string
      nama_gejala: string
      cf_pakar: number
      isDisabled: boolean
    }, ExtArgs["result"]["gejala"]>
    composites: {}
  }

  type gejalaGetPayload<S extends boolean | null | undefined | gejalaDefaultArgs> = $Result.GetResult<Prisma.$gejalaPayload, S>

  type gejalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<gejalaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GejalaCountAggregateInputType | true
    }

  export interface gejalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gejala'], meta: { name: 'gejala' } }
    /**
     * Find zero or one Gejala that matches the filter.
     * @param {gejalaFindUniqueArgs} args - Arguments to find a Gejala
     * @example
     * // Get one Gejala
     * const gejala = await prisma.gejala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gejalaFindUniqueArgs>(args: SelectSubset<T, gejalaFindUniqueArgs<ExtArgs>>): Prisma__gejalaClient<$Result.GetResult<Prisma.$gejalaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Gejala that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {gejalaFindUniqueOrThrowArgs} args - Arguments to find a Gejala
     * @example
     * // Get one Gejala
     * const gejala = await prisma.gejala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gejalaFindUniqueOrThrowArgs>(args: SelectSubset<T, gejalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gejalaClient<$Result.GetResult<Prisma.$gejalaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Gejala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gejalaFindFirstArgs} args - Arguments to find a Gejala
     * @example
     * // Get one Gejala
     * const gejala = await prisma.gejala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gejalaFindFirstArgs>(args?: SelectSubset<T, gejalaFindFirstArgs<ExtArgs>>): Prisma__gejalaClient<$Result.GetResult<Prisma.$gejalaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Gejala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gejalaFindFirstOrThrowArgs} args - Arguments to find a Gejala
     * @example
     * // Get one Gejala
     * const gejala = await prisma.gejala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gejalaFindFirstOrThrowArgs>(args?: SelectSubset<T, gejalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__gejalaClient<$Result.GetResult<Prisma.$gejalaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Gejalas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gejalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gejalas
     * const gejalas = await prisma.gejala.findMany()
     * 
     * // Get first 10 Gejalas
     * const gejalas = await prisma.gejala.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gejalaWithIdOnly = await prisma.gejala.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gejalaFindManyArgs>(args?: SelectSubset<T, gejalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gejalaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Gejala.
     * @param {gejalaCreateArgs} args - Arguments to create a Gejala.
     * @example
     * // Create one Gejala
     * const Gejala = await prisma.gejala.create({
     *   data: {
     *     // ... data to create a Gejala
     *   }
     * })
     * 
     */
    create<T extends gejalaCreateArgs>(args: SelectSubset<T, gejalaCreateArgs<ExtArgs>>): Prisma__gejalaClient<$Result.GetResult<Prisma.$gejalaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Gejalas.
     * @param {gejalaCreateManyArgs} args - Arguments to create many Gejalas.
     * @example
     * // Create many Gejalas
     * const gejala = await prisma.gejala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gejalaCreateManyArgs>(args?: SelectSubset<T, gejalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gejala.
     * @param {gejalaDeleteArgs} args - Arguments to delete one Gejala.
     * @example
     * // Delete one Gejala
     * const Gejala = await prisma.gejala.delete({
     *   where: {
     *     // ... filter to delete one Gejala
     *   }
     * })
     * 
     */
    delete<T extends gejalaDeleteArgs>(args: SelectSubset<T, gejalaDeleteArgs<ExtArgs>>): Prisma__gejalaClient<$Result.GetResult<Prisma.$gejalaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Gejala.
     * @param {gejalaUpdateArgs} args - Arguments to update one Gejala.
     * @example
     * // Update one Gejala
     * const gejala = await prisma.gejala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gejalaUpdateArgs>(args: SelectSubset<T, gejalaUpdateArgs<ExtArgs>>): Prisma__gejalaClient<$Result.GetResult<Prisma.$gejalaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Gejalas.
     * @param {gejalaDeleteManyArgs} args - Arguments to filter Gejalas to delete.
     * @example
     * // Delete a few Gejalas
     * const { count } = await prisma.gejala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gejalaDeleteManyArgs>(args?: SelectSubset<T, gejalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gejalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gejalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gejalas
     * const gejala = await prisma.gejala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gejalaUpdateManyArgs>(args: SelectSubset<T, gejalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gejala.
     * @param {gejalaUpsertArgs} args - Arguments to update or create a Gejala.
     * @example
     * // Update or create a Gejala
     * const gejala = await prisma.gejala.upsert({
     *   create: {
     *     // ... data to create a Gejala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gejala we want to update
     *   }
     * })
     */
    upsert<T extends gejalaUpsertArgs>(args: SelectSubset<T, gejalaUpsertArgs<ExtArgs>>): Prisma__gejalaClient<$Result.GetResult<Prisma.$gejalaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Gejalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gejalaCountArgs} args - Arguments to filter Gejalas to count.
     * @example
     * // Count the number of Gejalas
     * const count = await prisma.gejala.count({
     *   where: {
     *     // ... the filter for the Gejalas we want to count
     *   }
     * })
    **/
    count<T extends gejalaCountArgs>(
      args?: Subset<T, gejalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GejalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gejala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GejalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GejalaAggregateArgs>(args: Subset<T, GejalaAggregateArgs>): Prisma.PrismaPromise<GetGejalaAggregateType<T>>

    /**
     * Group by Gejala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gejalaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gejalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gejalaGroupByArgs['orderBy'] }
        : { orderBy?: gejalaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gejalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGejalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gejala model
   */
  readonly fields: gejalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gejala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gejalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DetailDiagnosa<T extends gejala$DetailDiagnosaArgs<ExtArgs> = {}>(args?: Subset<T, gejala$DetailDiagnosaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_diagnosaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gejala model
   */ 
  interface gejalaFieldRefs {
    readonly id: FieldRef<"gejala", 'Int'>
    readonly gejala_id: FieldRef<"gejala", 'String'>
    readonly nama_gejala: FieldRef<"gejala", 'String'>
    readonly cf_pakar: FieldRef<"gejala", 'Float'>
    readonly isDisabled: FieldRef<"gejala", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * gejala findUnique
   */
  export type gejalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gejala
     */
    select?: gejalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gejalaInclude<ExtArgs> | null
    /**
     * Filter, which gejala to fetch.
     */
    where: gejalaWhereUniqueInput
  }

  /**
   * gejala findUniqueOrThrow
   */
  export type gejalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gejala
     */
    select?: gejalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gejalaInclude<ExtArgs> | null
    /**
     * Filter, which gejala to fetch.
     */
    where: gejalaWhereUniqueInput
  }

  /**
   * gejala findFirst
   */
  export type gejalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gejala
     */
    select?: gejalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gejalaInclude<ExtArgs> | null
    /**
     * Filter, which gejala to fetch.
     */
    where?: gejalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gejalas to fetch.
     */
    orderBy?: gejalaOrderByWithRelationInput | gejalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gejalas.
     */
    cursor?: gejalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gejalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gejalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gejalas.
     */
    distinct?: GejalaScalarFieldEnum | GejalaScalarFieldEnum[]
  }

  /**
   * gejala findFirstOrThrow
   */
  export type gejalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gejala
     */
    select?: gejalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gejalaInclude<ExtArgs> | null
    /**
     * Filter, which gejala to fetch.
     */
    where?: gejalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gejalas to fetch.
     */
    orderBy?: gejalaOrderByWithRelationInput | gejalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gejalas.
     */
    cursor?: gejalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gejalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gejalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gejalas.
     */
    distinct?: GejalaScalarFieldEnum | GejalaScalarFieldEnum[]
  }

  /**
   * gejala findMany
   */
  export type gejalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gejala
     */
    select?: gejalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gejalaInclude<ExtArgs> | null
    /**
     * Filter, which gejalas to fetch.
     */
    where?: gejalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gejalas to fetch.
     */
    orderBy?: gejalaOrderByWithRelationInput | gejalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gejalas.
     */
    cursor?: gejalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gejalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gejalas.
     */
    skip?: number
    distinct?: GejalaScalarFieldEnum | GejalaScalarFieldEnum[]
  }

  /**
   * gejala create
   */
  export type gejalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gejala
     */
    select?: gejalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gejalaInclude<ExtArgs> | null
    /**
     * The data needed to create a gejala.
     */
    data: XOR<gejalaCreateInput, gejalaUncheckedCreateInput>
  }

  /**
   * gejala createMany
   */
  export type gejalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gejalas.
     */
    data: gejalaCreateManyInput | gejalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gejala update
   */
  export type gejalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gejala
     */
    select?: gejalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gejalaInclude<ExtArgs> | null
    /**
     * The data needed to update a gejala.
     */
    data: XOR<gejalaUpdateInput, gejalaUncheckedUpdateInput>
    /**
     * Choose, which gejala to update.
     */
    where: gejalaWhereUniqueInput
  }

  /**
   * gejala updateMany
   */
  export type gejalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gejalas.
     */
    data: XOR<gejalaUpdateManyMutationInput, gejalaUncheckedUpdateManyInput>
    /**
     * Filter which gejalas to update
     */
    where?: gejalaWhereInput
  }

  /**
   * gejala upsert
   */
  export type gejalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gejala
     */
    select?: gejalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gejalaInclude<ExtArgs> | null
    /**
     * The filter to search for the gejala to update in case it exists.
     */
    where: gejalaWhereUniqueInput
    /**
     * In case the gejala found by the `where` argument doesn't exist, create a new gejala with this data.
     */
    create: XOR<gejalaCreateInput, gejalaUncheckedCreateInput>
    /**
     * In case the gejala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gejalaUpdateInput, gejalaUncheckedUpdateInput>
  }

  /**
   * gejala delete
   */
  export type gejalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gejala
     */
    select?: gejalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gejalaInclude<ExtArgs> | null
    /**
     * Filter which gejala to delete.
     */
    where: gejalaWhereUniqueInput
  }

  /**
   * gejala deleteMany
   */
  export type gejalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gejalas to delete
     */
    where?: gejalaWhereInput
  }

  /**
   * gejala.DetailDiagnosa
   */
  export type gejala$DetailDiagnosaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
    where?: detail_diagnosaWhereInput
    orderBy?: detail_diagnosaOrderByWithRelationInput | detail_diagnosaOrderByWithRelationInput[]
    cursor?: detail_diagnosaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_diagnosaScalarFieldEnum | Detail_diagnosaScalarFieldEnum[]
  }

  /**
   * gejala without action
   */
  export type gejalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gejala
     */
    select?: gejalaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gejalaInclude<ExtArgs> | null
  }


  /**
   * Model diagnosa
   */

  export type AggregateDiagnosa = {
    _count: DiagnosaCountAggregateOutputType | null
    _avg: DiagnosaAvgAggregateOutputType | null
    _sum: DiagnosaSumAggregateOutputType | null
    _min: DiagnosaMinAggregateOutputType | null
    _max: DiagnosaMaxAggregateOutputType | null
  }

  export type DiagnosaAvgAggregateOutputType = {
    id: number | null
    child_id: number | null
    cf_result: number | null
    cf_result_percentage: number | null
  }

  export type DiagnosaSumAggregateOutputType = {
    id: number | null
    child_id: number | null
    cf_result: number | null
    cf_result_percentage: number | null
  }

  export type DiagnosaMinAggregateOutputType = {
    id: number | null
    child_id: number | null
    cf_result: number | null
    cf_result_percentage: number | null
    created_at: Date | null
  }

  export type DiagnosaMaxAggregateOutputType = {
    id: number | null
    child_id: number | null
    cf_result: number | null
    cf_result_percentage: number | null
    created_at: Date | null
  }

  export type DiagnosaCountAggregateOutputType = {
    id: number
    child_id: number
    cf_result: number
    cf_result_percentage: number
    created_at: number
    _all: number
  }


  export type DiagnosaAvgAggregateInputType = {
    id?: true
    child_id?: true
    cf_result?: true
    cf_result_percentage?: true
  }

  export type DiagnosaSumAggregateInputType = {
    id?: true
    child_id?: true
    cf_result?: true
    cf_result_percentage?: true
  }

  export type DiagnosaMinAggregateInputType = {
    id?: true
    child_id?: true
    cf_result?: true
    cf_result_percentage?: true
    created_at?: true
  }

  export type DiagnosaMaxAggregateInputType = {
    id?: true
    child_id?: true
    cf_result?: true
    cf_result_percentage?: true
    created_at?: true
  }

  export type DiagnosaCountAggregateInputType = {
    id?: true
    child_id?: true
    cf_result?: true
    cf_result_percentage?: true
    created_at?: true
    _all?: true
  }

  export type DiagnosaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnosa to aggregate.
     */
    where?: diagnosaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosas to fetch.
     */
    orderBy?: diagnosaOrderByWithRelationInput | diagnosaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: diagnosaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned diagnosas
    **/
    _count?: true | DiagnosaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosaMaxAggregateInputType
  }

  export type GetDiagnosaAggregateType<T extends DiagnosaAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosa[P]>
      : GetScalarType<T[P], AggregateDiagnosa[P]>
  }




  export type diagnosaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosaWhereInput
    orderBy?: diagnosaOrderByWithAggregationInput | diagnosaOrderByWithAggregationInput[]
    by: DiagnosaScalarFieldEnum[] | DiagnosaScalarFieldEnum
    having?: diagnosaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosaCountAggregateInputType | true
    _avg?: DiagnosaAvgAggregateInputType
    _sum?: DiagnosaSumAggregateInputType
    _min?: DiagnosaMinAggregateInputType
    _max?: DiagnosaMaxAggregateInputType
  }

  export type DiagnosaGroupByOutputType = {
    id: number
    child_id: number
    cf_result: number
    cf_result_percentage: number
    created_at: Date
    _count: DiagnosaCountAggregateOutputType | null
    _avg: DiagnosaAvgAggregateOutputType | null
    _sum: DiagnosaSumAggregateOutputType | null
    _min: DiagnosaMinAggregateOutputType | null
    _max: DiagnosaMaxAggregateOutputType | null
  }

  type GetDiagnosaGroupByPayload<T extends diagnosaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosaGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosaGroupByOutputType[P]>
        }
      >
    >


  export type diagnosaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    child_id?: boolean
    cf_result?: boolean
    cf_result_percentage?: boolean
    created_at?: boolean
    Childs?: boolean | diagnosa$ChildsArgs<ExtArgs>
    DetailDiagnosa?: boolean | diagnosa$DetailDiagnosaArgs<ExtArgs>
    _count?: boolean | DiagnosaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosa"]>


  export type diagnosaSelectScalar = {
    id?: boolean
    child_id?: boolean
    cf_result?: boolean
    cf_result_percentage?: boolean
    created_at?: boolean
  }

  export type diagnosaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Childs?: boolean | diagnosa$ChildsArgs<ExtArgs>
    DetailDiagnosa?: boolean | diagnosa$DetailDiagnosaArgs<ExtArgs>
    _count?: boolean | DiagnosaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $diagnosaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "diagnosa"
    objects: {
      Childs: Prisma.$childsPayload<ExtArgs> | null
      DetailDiagnosa: Prisma.$detail_diagnosaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      child_id: number
      cf_result: number
      cf_result_percentage: number
      created_at: Date
    }, ExtArgs["result"]["diagnosa"]>
    composites: {}
  }

  type diagnosaGetPayload<S extends boolean | null | undefined | diagnosaDefaultArgs> = $Result.GetResult<Prisma.$diagnosaPayload, S>

  type diagnosaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<diagnosaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiagnosaCountAggregateInputType | true
    }

  export interface diagnosaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['diagnosa'], meta: { name: 'diagnosa' } }
    /**
     * Find zero or one Diagnosa that matches the filter.
     * @param {diagnosaFindUniqueArgs} args - Arguments to find a Diagnosa
     * @example
     * // Get one Diagnosa
     * const diagnosa = await prisma.diagnosa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends diagnosaFindUniqueArgs>(args: SelectSubset<T, diagnosaFindUniqueArgs<ExtArgs>>): Prisma__diagnosaClient<$Result.GetResult<Prisma.$diagnosaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Diagnosa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {diagnosaFindUniqueOrThrowArgs} args - Arguments to find a Diagnosa
     * @example
     * // Get one Diagnosa
     * const diagnosa = await prisma.diagnosa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends diagnosaFindUniqueOrThrowArgs>(args: SelectSubset<T, diagnosaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__diagnosaClient<$Result.GetResult<Prisma.$diagnosaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Diagnosa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosaFindFirstArgs} args - Arguments to find a Diagnosa
     * @example
     * // Get one Diagnosa
     * const diagnosa = await prisma.diagnosa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends diagnosaFindFirstArgs>(args?: SelectSubset<T, diagnosaFindFirstArgs<ExtArgs>>): Prisma__diagnosaClient<$Result.GetResult<Prisma.$diagnosaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Diagnosa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosaFindFirstOrThrowArgs} args - Arguments to find a Diagnosa
     * @example
     * // Get one Diagnosa
     * const diagnosa = await prisma.diagnosa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends diagnosaFindFirstOrThrowArgs>(args?: SelectSubset<T, diagnosaFindFirstOrThrowArgs<ExtArgs>>): Prisma__diagnosaClient<$Result.GetResult<Prisma.$diagnosaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Diagnosas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnosas
     * const diagnosas = await prisma.diagnosa.findMany()
     * 
     * // Get first 10 Diagnosas
     * const diagnosas = await prisma.diagnosa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosaWithIdOnly = await prisma.diagnosa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends diagnosaFindManyArgs>(args?: SelectSubset<T, diagnosaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Diagnosa.
     * @param {diagnosaCreateArgs} args - Arguments to create a Diagnosa.
     * @example
     * // Create one Diagnosa
     * const Diagnosa = await prisma.diagnosa.create({
     *   data: {
     *     // ... data to create a Diagnosa
     *   }
     * })
     * 
     */
    create<T extends diagnosaCreateArgs>(args: SelectSubset<T, diagnosaCreateArgs<ExtArgs>>): Prisma__diagnosaClient<$Result.GetResult<Prisma.$diagnosaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Diagnosas.
     * @param {diagnosaCreateManyArgs} args - Arguments to create many Diagnosas.
     * @example
     * // Create many Diagnosas
     * const diagnosa = await prisma.diagnosa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends diagnosaCreateManyArgs>(args?: SelectSubset<T, diagnosaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Diagnosa.
     * @param {diagnosaDeleteArgs} args - Arguments to delete one Diagnosa.
     * @example
     * // Delete one Diagnosa
     * const Diagnosa = await prisma.diagnosa.delete({
     *   where: {
     *     // ... filter to delete one Diagnosa
     *   }
     * })
     * 
     */
    delete<T extends diagnosaDeleteArgs>(args: SelectSubset<T, diagnosaDeleteArgs<ExtArgs>>): Prisma__diagnosaClient<$Result.GetResult<Prisma.$diagnosaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Diagnosa.
     * @param {diagnosaUpdateArgs} args - Arguments to update one Diagnosa.
     * @example
     * // Update one Diagnosa
     * const diagnosa = await prisma.diagnosa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends diagnosaUpdateArgs>(args: SelectSubset<T, diagnosaUpdateArgs<ExtArgs>>): Prisma__diagnosaClient<$Result.GetResult<Prisma.$diagnosaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Diagnosas.
     * @param {diagnosaDeleteManyArgs} args - Arguments to filter Diagnosas to delete.
     * @example
     * // Delete a few Diagnosas
     * const { count } = await prisma.diagnosa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends diagnosaDeleteManyArgs>(args?: SelectSubset<T, diagnosaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnosas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnosas
     * const diagnosa = await prisma.diagnosa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends diagnosaUpdateManyArgs>(args: SelectSubset<T, diagnosaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Diagnosa.
     * @param {diagnosaUpsertArgs} args - Arguments to update or create a Diagnosa.
     * @example
     * // Update or create a Diagnosa
     * const diagnosa = await prisma.diagnosa.upsert({
     *   create: {
     *     // ... data to create a Diagnosa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnosa we want to update
     *   }
     * })
     */
    upsert<T extends diagnosaUpsertArgs>(args: SelectSubset<T, diagnosaUpsertArgs<ExtArgs>>): Prisma__diagnosaClient<$Result.GetResult<Prisma.$diagnosaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Diagnosas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosaCountArgs} args - Arguments to filter Diagnosas to count.
     * @example
     * // Count the number of Diagnosas
     * const count = await prisma.diagnosa.count({
     *   where: {
     *     // ... the filter for the Diagnosas we want to count
     *   }
     * })
    **/
    count<T extends diagnosaCountArgs>(
      args?: Subset<T, diagnosaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnosa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiagnosaAggregateArgs>(args: Subset<T, DiagnosaAggregateArgs>): Prisma.PrismaPromise<GetDiagnosaAggregateType<T>>

    /**
     * Group by Diagnosa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends diagnosaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: diagnosaGroupByArgs['orderBy'] }
        : { orderBy?: diagnosaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, diagnosaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the diagnosa model
   */
  readonly fields: diagnosaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for diagnosa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__diagnosaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Childs<T extends diagnosa$ChildsArgs<ExtArgs> = {}>(args?: Subset<T, diagnosa$ChildsArgs<ExtArgs>>): Prisma__childsClient<$Result.GetResult<Prisma.$childsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    DetailDiagnosa<T extends diagnosa$DetailDiagnosaArgs<ExtArgs> = {}>(args?: Subset<T, diagnosa$DetailDiagnosaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_diagnosaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the diagnosa model
   */ 
  interface diagnosaFieldRefs {
    readonly id: FieldRef<"diagnosa", 'Int'>
    readonly child_id: FieldRef<"diagnosa", 'Int'>
    readonly cf_result: FieldRef<"diagnosa", 'Float'>
    readonly cf_result_percentage: FieldRef<"diagnosa", 'Float'>
    readonly created_at: FieldRef<"diagnosa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * diagnosa findUnique
   */
  export type diagnosaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosa
     */
    select?: diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosaInclude<ExtArgs> | null
    /**
     * Filter, which diagnosa to fetch.
     */
    where: diagnosaWhereUniqueInput
  }

  /**
   * diagnosa findUniqueOrThrow
   */
  export type diagnosaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosa
     */
    select?: diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosaInclude<ExtArgs> | null
    /**
     * Filter, which diagnosa to fetch.
     */
    where: diagnosaWhereUniqueInput
  }

  /**
   * diagnosa findFirst
   */
  export type diagnosaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosa
     */
    select?: diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosaInclude<ExtArgs> | null
    /**
     * Filter, which diagnosa to fetch.
     */
    where?: diagnosaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosas to fetch.
     */
    orderBy?: diagnosaOrderByWithRelationInput | diagnosaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnosas.
     */
    cursor?: diagnosaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnosas.
     */
    distinct?: DiagnosaScalarFieldEnum | DiagnosaScalarFieldEnum[]
  }

  /**
   * diagnosa findFirstOrThrow
   */
  export type diagnosaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosa
     */
    select?: diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosaInclude<ExtArgs> | null
    /**
     * Filter, which diagnosa to fetch.
     */
    where?: diagnosaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosas to fetch.
     */
    orderBy?: diagnosaOrderByWithRelationInput | diagnosaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnosas.
     */
    cursor?: diagnosaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnosas.
     */
    distinct?: DiagnosaScalarFieldEnum | DiagnosaScalarFieldEnum[]
  }

  /**
   * diagnosa findMany
   */
  export type diagnosaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosa
     */
    select?: diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosaInclude<ExtArgs> | null
    /**
     * Filter, which diagnosas to fetch.
     */
    where?: diagnosaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosas to fetch.
     */
    orderBy?: diagnosaOrderByWithRelationInput | diagnosaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing diagnosas.
     */
    cursor?: diagnosaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosas.
     */
    skip?: number
    distinct?: DiagnosaScalarFieldEnum | DiagnosaScalarFieldEnum[]
  }

  /**
   * diagnosa create
   */
  export type diagnosaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosa
     */
    select?: diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosaInclude<ExtArgs> | null
    /**
     * The data needed to create a diagnosa.
     */
    data: XOR<diagnosaCreateInput, diagnosaUncheckedCreateInput>
  }

  /**
   * diagnosa createMany
   */
  export type diagnosaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many diagnosas.
     */
    data: diagnosaCreateManyInput | diagnosaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * diagnosa update
   */
  export type diagnosaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosa
     */
    select?: diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosaInclude<ExtArgs> | null
    /**
     * The data needed to update a diagnosa.
     */
    data: XOR<diagnosaUpdateInput, diagnosaUncheckedUpdateInput>
    /**
     * Choose, which diagnosa to update.
     */
    where: diagnosaWhereUniqueInput
  }

  /**
   * diagnosa updateMany
   */
  export type diagnosaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update diagnosas.
     */
    data: XOR<diagnosaUpdateManyMutationInput, diagnosaUncheckedUpdateManyInput>
    /**
     * Filter which diagnosas to update
     */
    where?: diagnosaWhereInput
  }

  /**
   * diagnosa upsert
   */
  export type diagnosaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosa
     */
    select?: diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosaInclude<ExtArgs> | null
    /**
     * The filter to search for the diagnosa to update in case it exists.
     */
    where: diagnosaWhereUniqueInput
    /**
     * In case the diagnosa found by the `where` argument doesn't exist, create a new diagnosa with this data.
     */
    create: XOR<diagnosaCreateInput, diagnosaUncheckedCreateInput>
    /**
     * In case the diagnosa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<diagnosaUpdateInput, diagnosaUncheckedUpdateInput>
  }

  /**
   * diagnosa delete
   */
  export type diagnosaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosa
     */
    select?: diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosaInclude<ExtArgs> | null
    /**
     * Filter which diagnosa to delete.
     */
    where: diagnosaWhereUniqueInput
  }

  /**
   * diagnosa deleteMany
   */
  export type diagnosaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnosas to delete
     */
    where?: diagnosaWhereInput
  }

  /**
   * diagnosa.Childs
   */
  export type diagnosa$ChildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the childs
     */
    select?: childsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: childsInclude<ExtArgs> | null
    where?: childsWhereInput
  }

  /**
   * diagnosa.DetailDiagnosa
   */
  export type diagnosa$DetailDiagnosaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
    where?: detail_diagnosaWhereInput
    orderBy?: detail_diagnosaOrderByWithRelationInput | detail_diagnosaOrderByWithRelationInput[]
    cursor?: detail_diagnosaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_diagnosaScalarFieldEnum | Detail_diagnosaScalarFieldEnum[]
  }

  /**
   * diagnosa without action
   */
  export type diagnosaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnosa
     */
    select?: diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosaInclude<ExtArgs> | null
  }


  /**
   * Model detail_diagnosa
   */

  export type AggregateDetail_diagnosa = {
    _count: Detail_diagnosaCountAggregateOutputType | null
    _avg: Detail_diagnosaAvgAggregateOutputType | null
    _sum: Detail_diagnosaSumAggregateOutputType | null
    _min: Detail_diagnosaMinAggregateOutputType | null
    _max: Detail_diagnosaMaxAggregateOutputType | null
  }

  export type Detail_diagnosaAvgAggregateOutputType = {
    id: number | null
    diagnosa_id: number | null
    cf_pakar: number | null
    cf_user: number | null
    cf_combined: number | null
  }

  export type Detail_diagnosaSumAggregateOutputType = {
    id: number | null
    diagnosa_id: number | null
    cf_pakar: number | null
    cf_user: number | null
    cf_combined: number | null
  }

  export type Detail_diagnosaMinAggregateOutputType = {
    id: number | null
    diagnosa_id: number | null
    gejala_id: string | null
    cf_pakar: number | null
    cf_user: number | null
    cf_combined: number | null
  }

  export type Detail_diagnosaMaxAggregateOutputType = {
    id: number | null
    diagnosa_id: number | null
    gejala_id: string | null
    cf_pakar: number | null
    cf_user: number | null
    cf_combined: number | null
  }

  export type Detail_diagnosaCountAggregateOutputType = {
    id: number
    diagnosa_id: number
    gejala_id: number
    cf_pakar: number
    cf_user: number
    cf_combined: number
    _all: number
  }


  export type Detail_diagnosaAvgAggregateInputType = {
    id?: true
    diagnosa_id?: true
    cf_pakar?: true
    cf_user?: true
    cf_combined?: true
  }

  export type Detail_diagnosaSumAggregateInputType = {
    id?: true
    diagnosa_id?: true
    cf_pakar?: true
    cf_user?: true
    cf_combined?: true
  }

  export type Detail_diagnosaMinAggregateInputType = {
    id?: true
    diagnosa_id?: true
    gejala_id?: true
    cf_pakar?: true
    cf_user?: true
    cf_combined?: true
  }

  export type Detail_diagnosaMaxAggregateInputType = {
    id?: true
    diagnosa_id?: true
    gejala_id?: true
    cf_pakar?: true
    cf_user?: true
    cf_combined?: true
  }

  export type Detail_diagnosaCountAggregateInputType = {
    id?: true
    diagnosa_id?: true
    gejala_id?: true
    cf_pakar?: true
    cf_user?: true
    cf_combined?: true
    _all?: true
  }

  export type Detail_diagnosaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_diagnosa to aggregate.
     */
    where?: detail_diagnosaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_diagnosas to fetch.
     */
    orderBy?: detail_diagnosaOrderByWithRelationInput | detail_diagnosaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detail_diagnosaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_diagnosas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_diagnosas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detail_diagnosas
    **/
    _count?: true | Detail_diagnosaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detail_diagnosaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detail_diagnosaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detail_diagnosaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detail_diagnosaMaxAggregateInputType
  }

  export type GetDetail_diagnosaAggregateType<T extends Detail_diagnosaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetail_diagnosa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetail_diagnosa[P]>
      : GetScalarType<T[P], AggregateDetail_diagnosa[P]>
  }




  export type detail_diagnosaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_diagnosaWhereInput
    orderBy?: detail_diagnosaOrderByWithAggregationInput | detail_diagnosaOrderByWithAggregationInput[]
    by: Detail_diagnosaScalarFieldEnum[] | Detail_diagnosaScalarFieldEnum
    having?: detail_diagnosaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detail_diagnosaCountAggregateInputType | true
    _avg?: Detail_diagnosaAvgAggregateInputType
    _sum?: Detail_diagnosaSumAggregateInputType
    _min?: Detail_diagnosaMinAggregateInputType
    _max?: Detail_diagnosaMaxAggregateInputType
  }

  export type Detail_diagnosaGroupByOutputType = {
    id: number
    diagnosa_id: number
    gejala_id: string
    cf_pakar: number
    cf_user: number
    cf_combined: number
    _count: Detail_diagnosaCountAggregateOutputType | null
    _avg: Detail_diagnosaAvgAggregateOutputType | null
    _sum: Detail_diagnosaSumAggregateOutputType | null
    _min: Detail_diagnosaMinAggregateOutputType | null
    _max: Detail_diagnosaMaxAggregateOutputType | null
  }

  type GetDetail_diagnosaGroupByPayload<T extends detail_diagnosaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detail_diagnosaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detail_diagnosaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detail_diagnosaGroupByOutputType[P]>
            : GetScalarType<T[P], Detail_diagnosaGroupByOutputType[P]>
        }
      >
    >


  export type detail_diagnosaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosa_id?: boolean
    gejala_id?: boolean
    cf_pakar?: boolean
    cf_user?: boolean
    cf_combined?: boolean
    Diagnosa?: boolean | diagnosaDefaultArgs<ExtArgs>
    Gejala?: boolean | gejalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_diagnosa"]>


  export type detail_diagnosaSelectScalar = {
    id?: boolean
    diagnosa_id?: boolean
    gejala_id?: boolean
    cf_pakar?: boolean
    cf_user?: boolean
    cf_combined?: boolean
  }

  export type detail_diagnosaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diagnosa?: boolean | diagnosaDefaultArgs<ExtArgs>
    Gejala?: boolean | gejalaDefaultArgs<ExtArgs>
  }

  export type $detail_diagnosaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detail_diagnosa"
    objects: {
      Diagnosa: Prisma.$diagnosaPayload<ExtArgs>
      Gejala: Prisma.$gejalaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      diagnosa_id: number
      gejala_id: string
      cf_pakar: number
      cf_user: number
      cf_combined: number
    }, ExtArgs["result"]["detail_diagnosa"]>
    composites: {}
  }

  type detail_diagnosaGetPayload<S extends boolean | null | undefined | detail_diagnosaDefaultArgs> = $Result.GetResult<Prisma.$detail_diagnosaPayload, S>

  type detail_diagnosaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<detail_diagnosaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Detail_diagnosaCountAggregateInputType | true
    }

  export interface detail_diagnosaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detail_diagnosa'], meta: { name: 'detail_diagnosa' } }
    /**
     * Find zero or one Detail_diagnosa that matches the filter.
     * @param {detail_diagnosaFindUniqueArgs} args - Arguments to find a Detail_diagnosa
     * @example
     * // Get one Detail_diagnosa
     * const detail_diagnosa = await prisma.detail_diagnosa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detail_diagnosaFindUniqueArgs>(args: SelectSubset<T, detail_diagnosaFindUniqueArgs<ExtArgs>>): Prisma__detail_diagnosaClient<$Result.GetResult<Prisma.$detail_diagnosaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Detail_diagnosa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {detail_diagnosaFindUniqueOrThrowArgs} args - Arguments to find a Detail_diagnosa
     * @example
     * // Get one Detail_diagnosa
     * const detail_diagnosa = await prisma.detail_diagnosa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detail_diagnosaFindUniqueOrThrowArgs>(args: SelectSubset<T, detail_diagnosaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detail_diagnosaClient<$Result.GetResult<Prisma.$detail_diagnosaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Detail_diagnosa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_diagnosaFindFirstArgs} args - Arguments to find a Detail_diagnosa
     * @example
     * // Get one Detail_diagnosa
     * const detail_diagnosa = await prisma.detail_diagnosa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detail_diagnosaFindFirstArgs>(args?: SelectSubset<T, detail_diagnosaFindFirstArgs<ExtArgs>>): Prisma__detail_diagnosaClient<$Result.GetResult<Prisma.$detail_diagnosaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Detail_diagnosa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_diagnosaFindFirstOrThrowArgs} args - Arguments to find a Detail_diagnosa
     * @example
     * // Get one Detail_diagnosa
     * const detail_diagnosa = await prisma.detail_diagnosa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detail_diagnosaFindFirstOrThrowArgs>(args?: SelectSubset<T, detail_diagnosaFindFirstOrThrowArgs<ExtArgs>>): Prisma__detail_diagnosaClient<$Result.GetResult<Prisma.$detail_diagnosaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Detail_diagnosas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_diagnosaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detail_diagnosas
     * const detail_diagnosas = await prisma.detail_diagnosa.findMany()
     * 
     * // Get first 10 Detail_diagnosas
     * const detail_diagnosas = await prisma.detail_diagnosa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detail_diagnosaWithIdOnly = await prisma.detail_diagnosa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detail_diagnosaFindManyArgs>(args?: SelectSubset<T, detail_diagnosaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_diagnosaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Detail_diagnosa.
     * @param {detail_diagnosaCreateArgs} args - Arguments to create a Detail_diagnosa.
     * @example
     * // Create one Detail_diagnosa
     * const Detail_diagnosa = await prisma.detail_diagnosa.create({
     *   data: {
     *     // ... data to create a Detail_diagnosa
     *   }
     * })
     * 
     */
    create<T extends detail_diagnosaCreateArgs>(args: SelectSubset<T, detail_diagnosaCreateArgs<ExtArgs>>): Prisma__detail_diagnosaClient<$Result.GetResult<Prisma.$detail_diagnosaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Detail_diagnosas.
     * @param {detail_diagnosaCreateManyArgs} args - Arguments to create many Detail_diagnosas.
     * @example
     * // Create many Detail_diagnosas
     * const detail_diagnosa = await prisma.detail_diagnosa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detail_diagnosaCreateManyArgs>(args?: SelectSubset<T, detail_diagnosaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detail_diagnosa.
     * @param {detail_diagnosaDeleteArgs} args - Arguments to delete one Detail_diagnosa.
     * @example
     * // Delete one Detail_diagnosa
     * const Detail_diagnosa = await prisma.detail_diagnosa.delete({
     *   where: {
     *     // ... filter to delete one Detail_diagnosa
     *   }
     * })
     * 
     */
    delete<T extends detail_diagnosaDeleteArgs>(args: SelectSubset<T, detail_diagnosaDeleteArgs<ExtArgs>>): Prisma__detail_diagnosaClient<$Result.GetResult<Prisma.$detail_diagnosaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Detail_diagnosa.
     * @param {detail_diagnosaUpdateArgs} args - Arguments to update one Detail_diagnosa.
     * @example
     * // Update one Detail_diagnosa
     * const detail_diagnosa = await prisma.detail_diagnosa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detail_diagnosaUpdateArgs>(args: SelectSubset<T, detail_diagnosaUpdateArgs<ExtArgs>>): Prisma__detail_diagnosaClient<$Result.GetResult<Prisma.$detail_diagnosaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Detail_diagnosas.
     * @param {detail_diagnosaDeleteManyArgs} args - Arguments to filter Detail_diagnosas to delete.
     * @example
     * // Delete a few Detail_diagnosas
     * const { count } = await prisma.detail_diagnosa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detail_diagnosaDeleteManyArgs>(args?: SelectSubset<T, detail_diagnosaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_diagnosas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_diagnosaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detail_diagnosas
     * const detail_diagnosa = await prisma.detail_diagnosa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detail_diagnosaUpdateManyArgs>(args: SelectSubset<T, detail_diagnosaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detail_diagnosa.
     * @param {detail_diagnosaUpsertArgs} args - Arguments to update or create a Detail_diagnosa.
     * @example
     * // Update or create a Detail_diagnosa
     * const detail_diagnosa = await prisma.detail_diagnosa.upsert({
     *   create: {
     *     // ... data to create a Detail_diagnosa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail_diagnosa we want to update
     *   }
     * })
     */
    upsert<T extends detail_diagnosaUpsertArgs>(args: SelectSubset<T, detail_diagnosaUpsertArgs<ExtArgs>>): Prisma__detail_diagnosaClient<$Result.GetResult<Prisma.$detail_diagnosaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Detail_diagnosas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_diagnosaCountArgs} args - Arguments to filter Detail_diagnosas to count.
     * @example
     * // Count the number of Detail_diagnosas
     * const count = await prisma.detail_diagnosa.count({
     *   where: {
     *     // ... the filter for the Detail_diagnosas we want to count
     *   }
     * })
    **/
    count<T extends detail_diagnosaCountArgs>(
      args?: Subset<T, detail_diagnosaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detail_diagnosaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detail_diagnosa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_diagnosaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detail_diagnosaAggregateArgs>(args: Subset<T, Detail_diagnosaAggregateArgs>): Prisma.PrismaPromise<GetDetail_diagnosaAggregateType<T>>

    /**
     * Group by Detail_diagnosa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_diagnosaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detail_diagnosaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detail_diagnosaGroupByArgs['orderBy'] }
        : { orderBy?: detail_diagnosaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detail_diagnosaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetail_diagnosaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detail_diagnosa model
   */
  readonly fields: detail_diagnosaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detail_diagnosa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detail_diagnosaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Diagnosa<T extends diagnosaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, diagnosaDefaultArgs<ExtArgs>>): Prisma__diagnosaClient<$Result.GetResult<Prisma.$diagnosaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Gejala<T extends gejalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gejalaDefaultArgs<ExtArgs>>): Prisma__gejalaClient<$Result.GetResult<Prisma.$gejalaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detail_diagnosa model
   */ 
  interface detail_diagnosaFieldRefs {
    readonly id: FieldRef<"detail_diagnosa", 'Int'>
    readonly diagnosa_id: FieldRef<"detail_diagnosa", 'Int'>
    readonly gejala_id: FieldRef<"detail_diagnosa", 'String'>
    readonly cf_pakar: FieldRef<"detail_diagnosa", 'Float'>
    readonly cf_user: FieldRef<"detail_diagnosa", 'Float'>
    readonly cf_combined: FieldRef<"detail_diagnosa", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * detail_diagnosa findUnique
   */
  export type detail_diagnosaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
    /**
     * Filter, which detail_diagnosa to fetch.
     */
    where: detail_diagnosaWhereUniqueInput
  }

  /**
   * detail_diagnosa findUniqueOrThrow
   */
  export type detail_diagnosaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
    /**
     * Filter, which detail_diagnosa to fetch.
     */
    where: detail_diagnosaWhereUniqueInput
  }

  /**
   * detail_diagnosa findFirst
   */
  export type detail_diagnosaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
    /**
     * Filter, which detail_diagnosa to fetch.
     */
    where?: detail_diagnosaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_diagnosas to fetch.
     */
    orderBy?: detail_diagnosaOrderByWithRelationInput | detail_diagnosaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_diagnosas.
     */
    cursor?: detail_diagnosaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_diagnosas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_diagnosas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_diagnosas.
     */
    distinct?: Detail_diagnosaScalarFieldEnum | Detail_diagnosaScalarFieldEnum[]
  }

  /**
   * detail_diagnosa findFirstOrThrow
   */
  export type detail_diagnosaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
    /**
     * Filter, which detail_diagnosa to fetch.
     */
    where?: detail_diagnosaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_diagnosas to fetch.
     */
    orderBy?: detail_diagnosaOrderByWithRelationInput | detail_diagnosaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_diagnosas.
     */
    cursor?: detail_diagnosaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_diagnosas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_diagnosas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_diagnosas.
     */
    distinct?: Detail_diagnosaScalarFieldEnum | Detail_diagnosaScalarFieldEnum[]
  }

  /**
   * detail_diagnosa findMany
   */
  export type detail_diagnosaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
    /**
     * Filter, which detail_diagnosas to fetch.
     */
    where?: detail_diagnosaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_diagnosas to fetch.
     */
    orderBy?: detail_diagnosaOrderByWithRelationInput | detail_diagnosaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detail_diagnosas.
     */
    cursor?: detail_diagnosaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_diagnosas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_diagnosas.
     */
    skip?: number
    distinct?: Detail_diagnosaScalarFieldEnum | Detail_diagnosaScalarFieldEnum[]
  }

  /**
   * detail_diagnosa create
   */
  export type detail_diagnosaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
    /**
     * The data needed to create a detail_diagnosa.
     */
    data: XOR<detail_diagnosaCreateInput, detail_diagnosaUncheckedCreateInput>
  }

  /**
   * detail_diagnosa createMany
   */
  export type detail_diagnosaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detail_diagnosas.
     */
    data: detail_diagnosaCreateManyInput | detail_diagnosaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detail_diagnosa update
   */
  export type detail_diagnosaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
    /**
     * The data needed to update a detail_diagnosa.
     */
    data: XOR<detail_diagnosaUpdateInput, detail_diagnosaUncheckedUpdateInput>
    /**
     * Choose, which detail_diagnosa to update.
     */
    where: detail_diagnosaWhereUniqueInput
  }

  /**
   * detail_diagnosa updateMany
   */
  export type detail_diagnosaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detail_diagnosas.
     */
    data: XOR<detail_diagnosaUpdateManyMutationInput, detail_diagnosaUncheckedUpdateManyInput>
    /**
     * Filter which detail_diagnosas to update
     */
    where?: detail_diagnosaWhereInput
  }

  /**
   * detail_diagnosa upsert
   */
  export type detail_diagnosaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
    /**
     * The filter to search for the detail_diagnosa to update in case it exists.
     */
    where: detail_diagnosaWhereUniqueInput
    /**
     * In case the detail_diagnosa found by the `where` argument doesn't exist, create a new detail_diagnosa with this data.
     */
    create: XOR<detail_diagnosaCreateInput, detail_diagnosaUncheckedCreateInput>
    /**
     * In case the detail_diagnosa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detail_diagnosaUpdateInput, detail_diagnosaUncheckedUpdateInput>
  }

  /**
   * detail_diagnosa delete
   */
  export type detail_diagnosaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
    /**
     * Filter which detail_diagnosa to delete.
     */
    where: detail_diagnosaWhereUniqueInput
  }

  /**
   * detail_diagnosa deleteMany
   */
  export type detail_diagnosaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_diagnosas to delete
     */
    where?: detail_diagnosaWhereInput
  }

  /**
   * detail_diagnosa without action
   */
  export type detail_diagnosaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_diagnosa
     */
    select?: detail_diagnosaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_diagnosaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ChildsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    nama_anak: 'nama_anak',
    tanggal_lahir: 'tanggal_lahir',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChildsScalarFieldEnum = (typeof ChildsScalarFieldEnum)[keyof typeof ChildsScalarFieldEnum]


  export const GejalaScalarFieldEnum: {
    id: 'id',
    gejala_id: 'gejala_id',
    nama_gejala: 'nama_gejala',
    cf_pakar: 'cf_pakar',
    isDisabled: 'isDisabled'
  };

  export type GejalaScalarFieldEnum = (typeof GejalaScalarFieldEnum)[keyof typeof GejalaScalarFieldEnum]


  export const DiagnosaScalarFieldEnum: {
    id: 'id',
    child_id: 'child_id',
    cf_result: 'cf_result',
    cf_result_percentage: 'cf_result_percentage',
    created_at: 'created_at'
  };

  export type DiagnosaScalarFieldEnum = (typeof DiagnosaScalarFieldEnum)[keyof typeof DiagnosaScalarFieldEnum]


  export const Detail_diagnosaScalarFieldEnum: {
    id: 'id',
    diagnosa_id: 'diagnosa_id',
    gejala_id: 'gejala_id',
    cf_pakar: 'cf_pakar',
    cf_user: 'cf_user',
    cf_combined: 'cf_combined'
  };

  export type Detail_diagnosaScalarFieldEnum = (typeof Detail_diagnosaScalarFieldEnum)[keyof typeof Detail_diagnosaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const childsOrderByRelevanceFieldEnum: {
    nama_anak: 'nama_anak'
  };

  export type childsOrderByRelevanceFieldEnum = (typeof childsOrderByRelevanceFieldEnum)[keyof typeof childsOrderByRelevanceFieldEnum]


  export const gejalaOrderByRelevanceFieldEnum: {
    gejala_id: 'gejala_id',
    nama_gejala: 'nama_gejala'
  };

  export type gejalaOrderByRelevanceFieldEnum = (typeof gejalaOrderByRelevanceFieldEnum)[keyof typeof gejalaOrderByRelevanceFieldEnum]


  export const detail_diagnosaOrderByRelevanceFieldEnum: {
    gejala_id: 'gejala_id'
  };

  export type detail_diagnosaOrderByRelevanceFieldEnum = (typeof detail_diagnosaOrderByRelevanceFieldEnum)[keyof typeof detail_diagnosaOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    Childs?: ChildsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    Childs?: childsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    Childs?: ChildsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
  }

  export type childsWhereInput = {
    AND?: childsWhereInput | childsWhereInput[]
    OR?: childsWhereInput[]
    NOT?: childsWhereInput | childsWhereInput[]
    id?: IntFilter<"childs"> | number
    user_id?: IntFilter<"childs"> | number
    nama_anak?: StringFilter<"childs"> | string
    tanggal_lahir?: DateTimeFilter<"childs"> | Date | string
    createdAt?: DateTimeFilter<"childs"> | Date | string
    updatedAt?: DateTimeFilter<"childs"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    Diagnosa?: DiagnosaListRelationFilter
  }

  export type childsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama_anak?: SortOrder
    tanggal_lahir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: usersOrderByWithRelationInput
    Diagnosa?: diagnosaOrderByRelationAggregateInput
    _relevance?: childsOrderByRelevanceInput
  }

  export type childsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: childsWhereInput | childsWhereInput[]
    OR?: childsWhereInput[]
    NOT?: childsWhereInput | childsWhereInput[]
    user_id?: IntFilter<"childs"> | number
    nama_anak?: StringFilter<"childs"> | string
    tanggal_lahir?: DateTimeFilter<"childs"> | Date | string
    createdAt?: DateTimeFilter<"childs"> | Date | string
    updatedAt?: DateTimeFilter<"childs"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    Diagnosa?: DiagnosaListRelationFilter
  }, "id">

  export type childsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama_anak?: SortOrder
    tanggal_lahir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: childsCountOrderByAggregateInput
    _avg?: childsAvgOrderByAggregateInput
    _max?: childsMaxOrderByAggregateInput
    _min?: childsMinOrderByAggregateInput
    _sum?: childsSumOrderByAggregateInput
  }

  export type childsScalarWhereWithAggregatesInput = {
    AND?: childsScalarWhereWithAggregatesInput | childsScalarWhereWithAggregatesInput[]
    OR?: childsScalarWhereWithAggregatesInput[]
    NOT?: childsScalarWhereWithAggregatesInput | childsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"childs"> | number
    user_id?: IntWithAggregatesFilter<"childs"> | number
    nama_anak?: StringWithAggregatesFilter<"childs"> | string
    tanggal_lahir?: DateTimeWithAggregatesFilter<"childs"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"childs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"childs"> | Date | string
  }

  export type gejalaWhereInput = {
    AND?: gejalaWhereInput | gejalaWhereInput[]
    OR?: gejalaWhereInput[]
    NOT?: gejalaWhereInput | gejalaWhereInput[]
    id?: IntFilter<"gejala"> | number
    gejala_id?: StringFilter<"gejala"> | string
    nama_gejala?: StringFilter<"gejala"> | string
    cf_pakar?: FloatFilter<"gejala"> | number
    isDisabled?: BoolFilter<"gejala"> | boolean
    DetailDiagnosa?: Detail_diagnosaListRelationFilter
  }

  export type gejalaOrderByWithRelationInput = {
    id?: SortOrder
    gejala_id?: SortOrder
    nama_gejala?: SortOrder
    cf_pakar?: SortOrder
    isDisabled?: SortOrder
    DetailDiagnosa?: detail_diagnosaOrderByRelationAggregateInput
    _relevance?: gejalaOrderByRelevanceInput
  }

  export type gejalaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gejala_id?: string
    AND?: gejalaWhereInput | gejalaWhereInput[]
    OR?: gejalaWhereInput[]
    NOT?: gejalaWhereInput | gejalaWhereInput[]
    nama_gejala?: StringFilter<"gejala"> | string
    cf_pakar?: FloatFilter<"gejala"> | number
    isDisabled?: BoolFilter<"gejala"> | boolean
    DetailDiagnosa?: Detail_diagnosaListRelationFilter
  }, "id" | "gejala_id">

  export type gejalaOrderByWithAggregationInput = {
    id?: SortOrder
    gejala_id?: SortOrder
    nama_gejala?: SortOrder
    cf_pakar?: SortOrder
    isDisabled?: SortOrder
    _count?: gejalaCountOrderByAggregateInput
    _avg?: gejalaAvgOrderByAggregateInput
    _max?: gejalaMaxOrderByAggregateInput
    _min?: gejalaMinOrderByAggregateInput
    _sum?: gejalaSumOrderByAggregateInput
  }

  export type gejalaScalarWhereWithAggregatesInput = {
    AND?: gejalaScalarWhereWithAggregatesInput | gejalaScalarWhereWithAggregatesInput[]
    OR?: gejalaScalarWhereWithAggregatesInput[]
    NOT?: gejalaScalarWhereWithAggregatesInput | gejalaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gejala"> | number
    gejala_id?: StringWithAggregatesFilter<"gejala"> | string
    nama_gejala?: StringWithAggregatesFilter<"gejala"> | string
    cf_pakar?: FloatWithAggregatesFilter<"gejala"> | number
    isDisabled?: BoolWithAggregatesFilter<"gejala"> | boolean
  }

  export type diagnosaWhereInput = {
    AND?: diagnosaWhereInput | diagnosaWhereInput[]
    OR?: diagnosaWhereInput[]
    NOT?: diagnosaWhereInput | diagnosaWhereInput[]
    id?: IntFilter<"diagnosa"> | number
    child_id?: IntFilter<"diagnosa"> | number
    cf_result?: FloatFilter<"diagnosa"> | number
    cf_result_percentage?: FloatFilter<"diagnosa"> | number
    created_at?: DateTimeFilter<"diagnosa"> | Date | string
    Childs?: XOR<ChildsNullableScalarRelationFilter, childsWhereInput> | null
    DetailDiagnosa?: Detail_diagnosaListRelationFilter
  }

  export type diagnosaOrderByWithRelationInput = {
    id?: SortOrder
    child_id?: SortOrder
    cf_result?: SortOrder
    cf_result_percentage?: SortOrder
    created_at?: SortOrder
    Childs?: childsOrderByWithRelationInput
    DetailDiagnosa?: detail_diagnosaOrderByRelationAggregateInput
  }

  export type diagnosaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: diagnosaWhereInput | diagnosaWhereInput[]
    OR?: diagnosaWhereInput[]
    NOT?: diagnosaWhereInput | diagnosaWhereInput[]
    child_id?: IntFilter<"diagnosa"> | number
    cf_result?: FloatFilter<"diagnosa"> | number
    cf_result_percentage?: FloatFilter<"diagnosa"> | number
    created_at?: DateTimeFilter<"diagnosa"> | Date | string
    Childs?: XOR<ChildsNullableScalarRelationFilter, childsWhereInput> | null
    DetailDiagnosa?: Detail_diagnosaListRelationFilter
  }, "id">

  export type diagnosaOrderByWithAggregationInput = {
    id?: SortOrder
    child_id?: SortOrder
    cf_result?: SortOrder
    cf_result_percentage?: SortOrder
    created_at?: SortOrder
    _count?: diagnosaCountOrderByAggregateInput
    _avg?: diagnosaAvgOrderByAggregateInput
    _max?: diagnosaMaxOrderByAggregateInput
    _min?: diagnosaMinOrderByAggregateInput
    _sum?: diagnosaSumOrderByAggregateInput
  }

  export type diagnosaScalarWhereWithAggregatesInput = {
    AND?: diagnosaScalarWhereWithAggregatesInput | diagnosaScalarWhereWithAggregatesInput[]
    OR?: diagnosaScalarWhereWithAggregatesInput[]
    NOT?: diagnosaScalarWhereWithAggregatesInput | diagnosaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"diagnosa"> | number
    child_id?: IntWithAggregatesFilter<"diagnosa"> | number
    cf_result?: FloatWithAggregatesFilter<"diagnosa"> | number
    cf_result_percentage?: FloatWithAggregatesFilter<"diagnosa"> | number
    created_at?: DateTimeWithAggregatesFilter<"diagnosa"> | Date | string
  }

  export type detail_diagnosaWhereInput = {
    AND?: detail_diagnosaWhereInput | detail_diagnosaWhereInput[]
    OR?: detail_diagnosaWhereInput[]
    NOT?: detail_diagnosaWhereInput | detail_diagnosaWhereInput[]
    id?: IntFilter<"detail_diagnosa"> | number
    diagnosa_id?: IntFilter<"detail_diagnosa"> | number
    gejala_id?: StringFilter<"detail_diagnosa"> | string
    cf_pakar?: FloatFilter<"detail_diagnosa"> | number
    cf_user?: FloatFilter<"detail_diagnosa"> | number
    cf_combined?: FloatFilter<"detail_diagnosa"> | number
    Diagnosa?: XOR<DiagnosaScalarRelationFilter, diagnosaWhereInput>
    Gejala?: XOR<GejalaScalarRelationFilter, gejalaWhereInput>
  }

  export type detail_diagnosaOrderByWithRelationInput = {
    id?: SortOrder
    diagnosa_id?: SortOrder
    gejala_id?: SortOrder
    cf_pakar?: SortOrder
    cf_user?: SortOrder
    cf_combined?: SortOrder
    Diagnosa?: diagnosaOrderByWithRelationInput
    Gejala?: gejalaOrderByWithRelationInput
    _relevance?: detail_diagnosaOrderByRelevanceInput
  }

  export type detail_diagnosaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detail_diagnosaWhereInput | detail_diagnosaWhereInput[]
    OR?: detail_diagnosaWhereInput[]
    NOT?: detail_diagnosaWhereInput | detail_diagnosaWhereInput[]
    diagnosa_id?: IntFilter<"detail_diagnosa"> | number
    gejala_id?: StringFilter<"detail_diagnosa"> | string
    cf_pakar?: FloatFilter<"detail_diagnosa"> | number
    cf_user?: FloatFilter<"detail_diagnosa"> | number
    cf_combined?: FloatFilter<"detail_diagnosa"> | number
    Diagnosa?: XOR<DiagnosaScalarRelationFilter, diagnosaWhereInput>
    Gejala?: XOR<GejalaScalarRelationFilter, gejalaWhereInput>
  }, "id">

  export type detail_diagnosaOrderByWithAggregationInput = {
    id?: SortOrder
    diagnosa_id?: SortOrder
    gejala_id?: SortOrder
    cf_pakar?: SortOrder
    cf_user?: SortOrder
    cf_combined?: SortOrder
    _count?: detail_diagnosaCountOrderByAggregateInput
    _avg?: detail_diagnosaAvgOrderByAggregateInput
    _max?: detail_diagnosaMaxOrderByAggregateInput
    _min?: detail_diagnosaMinOrderByAggregateInput
    _sum?: detail_diagnosaSumOrderByAggregateInput
  }

  export type detail_diagnosaScalarWhereWithAggregatesInput = {
    AND?: detail_diagnosaScalarWhereWithAggregatesInput | detail_diagnosaScalarWhereWithAggregatesInput[]
    OR?: detail_diagnosaScalarWhereWithAggregatesInput[]
    NOT?: detail_diagnosaScalarWhereWithAggregatesInput | detail_diagnosaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"detail_diagnosa"> | number
    diagnosa_id?: IntWithAggregatesFilter<"detail_diagnosa"> | number
    gejala_id?: StringWithAggregatesFilter<"detail_diagnosa"> | string
    cf_pakar?: FloatWithAggregatesFilter<"detail_diagnosa"> | number
    cf_user?: FloatWithAggregatesFilter<"detail_diagnosa"> | number
    cf_combined?: FloatWithAggregatesFilter<"detail_diagnosa"> | number
  }

  export type usersCreateInput = {
    name: string
    email: string
    password: string
    role: string
    Childs?: childsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    Childs?: childsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Childs?: childsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Childs?: childsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type childsCreateInput = {
    nama_anak: string
    tanggal_lahir: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: usersCreateNestedOneWithoutChildsInput
    Diagnosa?: diagnosaCreateNestedManyWithoutChildsInput
  }

  export type childsUncheckedCreateInput = {
    id?: number
    user_id: number
    nama_anak: string
    tanggal_lahir: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Diagnosa?: diagnosaUncheckedCreateNestedManyWithoutChildsInput
  }

  export type childsUpdateInput = {
    nama_anak?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: usersUpdateOneWithoutChildsNestedInput
    Diagnosa?: diagnosaUpdateManyWithoutChildsNestedInput
  }

  export type childsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    nama_anak?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Diagnosa?: diagnosaUncheckedUpdateManyWithoutChildsNestedInput
  }

  export type childsCreateManyInput = {
    id?: number
    user_id: number
    nama_anak: string
    tanggal_lahir: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type childsUpdateManyMutationInput = {
    nama_anak?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type childsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    nama_anak?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gejalaCreateInput = {
    gejala_id: string
    nama_gejala: string
    cf_pakar: number
    isDisabled?: boolean
    DetailDiagnosa?: detail_diagnosaCreateNestedManyWithoutGejalaInput
  }

  export type gejalaUncheckedCreateInput = {
    id?: number
    gejala_id: string
    nama_gejala: string
    cf_pakar: number
    isDisabled?: boolean
    DetailDiagnosa?: detail_diagnosaUncheckedCreateNestedManyWithoutGejalaInput
  }

  export type gejalaUpdateInput = {
    gejala_id?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    DetailDiagnosa?: detail_diagnosaUpdateManyWithoutGejalaNestedInput
  }

  export type gejalaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gejala_id?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    DetailDiagnosa?: detail_diagnosaUncheckedUpdateManyWithoutGejalaNestedInput
  }

  export type gejalaCreateManyInput = {
    id?: number
    gejala_id: string
    nama_gejala: string
    cf_pakar: number
    isDisabled?: boolean
  }

  export type gejalaUpdateManyMutationInput = {
    gejala_id?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type gejalaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gejala_id?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type diagnosaCreateInput = {
    cf_result?: number
    cf_result_percentage?: number
    created_at?: Date | string
    Childs?: childsCreateNestedOneWithoutDiagnosaInput
    DetailDiagnosa?: detail_diagnosaCreateNestedManyWithoutDiagnosaInput
  }

  export type diagnosaUncheckedCreateInput = {
    id?: number
    child_id: number
    cf_result?: number
    cf_result_percentage?: number
    created_at?: Date | string
    DetailDiagnosa?: detail_diagnosaUncheckedCreateNestedManyWithoutDiagnosaInput
  }

  export type diagnosaUpdateInput = {
    cf_result?: FloatFieldUpdateOperationsInput | number
    cf_result_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Childs?: childsUpdateOneWithoutDiagnosaNestedInput
    DetailDiagnosa?: detail_diagnosaUpdateManyWithoutDiagnosaNestedInput
  }

  export type diagnosaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    child_id?: IntFieldUpdateOperationsInput | number
    cf_result?: FloatFieldUpdateOperationsInput | number
    cf_result_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    DetailDiagnosa?: detail_diagnosaUncheckedUpdateManyWithoutDiagnosaNestedInput
  }

  export type diagnosaCreateManyInput = {
    id?: number
    child_id: number
    cf_result?: number
    cf_result_percentage?: number
    created_at?: Date | string
  }

  export type diagnosaUpdateManyMutationInput = {
    cf_result?: FloatFieldUpdateOperationsInput | number
    cf_result_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diagnosaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    child_id?: IntFieldUpdateOperationsInput | number
    cf_result?: FloatFieldUpdateOperationsInput | number
    cf_result_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_diagnosaCreateInput = {
    cf_pakar: number
    cf_user: number
    cf_combined: number
    Diagnosa: diagnosaCreateNestedOneWithoutDetailDiagnosaInput
    Gejala: gejalaCreateNestedOneWithoutDetailDiagnosaInput
  }

  export type detail_diagnosaUncheckedCreateInput = {
    id?: number
    diagnosa_id: number
    gejala_id: string
    cf_pakar: number
    cf_user: number
    cf_combined: number
  }

  export type detail_diagnosaUpdateInput = {
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    cf_user?: FloatFieldUpdateOperationsInput | number
    cf_combined?: FloatFieldUpdateOperationsInput | number
    Diagnosa?: diagnosaUpdateOneRequiredWithoutDetailDiagnosaNestedInput
    Gejala?: gejalaUpdateOneRequiredWithoutDetailDiagnosaNestedInput
  }

  export type detail_diagnosaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosa_id?: IntFieldUpdateOperationsInput | number
    gejala_id?: StringFieldUpdateOperationsInput | string
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    cf_user?: FloatFieldUpdateOperationsInput | number
    cf_combined?: FloatFieldUpdateOperationsInput | number
  }

  export type detail_diagnosaCreateManyInput = {
    id?: number
    diagnosa_id: number
    gejala_id: string
    cf_pakar: number
    cf_user: number
    cf_combined: number
  }

  export type detail_diagnosaUpdateManyMutationInput = {
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    cf_user?: FloatFieldUpdateOperationsInput | number
    cf_combined?: FloatFieldUpdateOperationsInput | number
  }

  export type detail_diagnosaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosa_id?: IntFieldUpdateOperationsInput | number
    gejala_id?: StringFieldUpdateOperationsInput | string
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    cf_user?: FloatFieldUpdateOperationsInput | number
    cf_combined?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ChildsListRelationFilter = {
    every?: childsWhereInput
    some?: childsWhereInput
    none?: childsWhereInput
  }

  export type childsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type DiagnosaListRelationFilter = {
    every?: diagnosaWhereInput
    some?: diagnosaWhereInput
    none?: diagnosaWhereInput
  }

  export type diagnosaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type childsOrderByRelevanceInput = {
    fields: childsOrderByRelevanceFieldEnum | childsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type childsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama_anak?: SortOrder
    tanggal_lahir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type childsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type childsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama_anak?: SortOrder
    tanggal_lahir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type childsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama_anak?: SortOrder
    tanggal_lahir?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type childsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Detail_diagnosaListRelationFilter = {
    every?: detail_diagnosaWhereInput
    some?: detail_diagnosaWhereInput
    none?: detail_diagnosaWhereInput
  }

  export type detail_diagnosaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gejalaOrderByRelevanceInput = {
    fields: gejalaOrderByRelevanceFieldEnum | gejalaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type gejalaCountOrderByAggregateInput = {
    id?: SortOrder
    gejala_id?: SortOrder
    nama_gejala?: SortOrder
    cf_pakar?: SortOrder
    isDisabled?: SortOrder
  }

  export type gejalaAvgOrderByAggregateInput = {
    id?: SortOrder
    cf_pakar?: SortOrder
  }

  export type gejalaMaxOrderByAggregateInput = {
    id?: SortOrder
    gejala_id?: SortOrder
    nama_gejala?: SortOrder
    cf_pakar?: SortOrder
    isDisabled?: SortOrder
  }

  export type gejalaMinOrderByAggregateInput = {
    id?: SortOrder
    gejala_id?: SortOrder
    nama_gejala?: SortOrder
    cf_pakar?: SortOrder
    isDisabled?: SortOrder
  }

  export type gejalaSumOrderByAggregateInput = {
    id?: SortOrder
    cf_pakar?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChildsNullableScalarRelationFilter = {
    is?: childsWhereInput | null
    isNot?: childsWhereInput | null
  }

  export type diagnosaCountOrderByAggregateInput = {
    id?: SortOrder
    child_id?: SortOrder
    cf_result?: SortOrder
    cf_result_percentage?: SortOrder
    created_at?: SortOrder
  }

  export type diagnosaAvgOrderByAggregateInput = {
    id?: SortOrder
    child_id?: SortOrder
    cf_result?: SortOrder
    cf_result_percentage?: SortOrder
  }

  export type diagnosaMaxOrderByAggregateInput = {
    id?: SortOrder
    child_id?: SortOrder
    cf_result?: SortOrder
    cf_result_percentage?: SortOrder
    created_at?: SortOrder
  }

  export type diagnosaMinOrderByAggregateInput = {
    id?: SortOrder
    child_id?: SortOrder
    cf_result?: SortOrder
    cf_result_percentage?: SortOrder
    created_at?: SortOrder
  }

  export type diagnosaSumOrderByAggregateInput = {
    id?: SortOrder
    child_id?: SortOrder
    cf_result?: SortOrder
    cf_result_percentage?: SortOrder
  }

  export type DiagnosaScalarRelationFilter = {
    is?: diagnosaWhereInput
    isNot?: diagnosaWhereInput
  }

  export type GejalaScalarRelationFilter = {
    is?: gejalaWhereInput
    isNot?: gejalaWhereInput
  }

  export type detail_diagnosaOrderByRelevanceInput = {
    fields: detail_diagnosaOrderByRelevanceFieldEnum | detail_diagnosaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type detail_diagnosaCountOrderByAggregateInput = {
    id?: SortOrder
    diagnosa_id?: SortOrder
    gejala_id?: SortOrder
    cf_pakar?: SortOrder
    cf_user?: SortOrder
    cf_combined?: SortOrder
  }

  export type detail_diagnosaAvgOrderByAggregateInput = {
    id?: SortOrder
    diagnosa_id?: SortOrder
    cf_pakar?: SortOrder
    cf_user?: SortOrder
    cf_combined?: SortOrder
  }

  export type detail_diagnosaMaxOrderByAggregateInput = {
    id?: SortOrder
    diagnosa_id?: SortOrder
    gejala_id?: SortOrder
    cf_pakar?: SortOrder
    cf_user?: SortOrder
    cf_combined?: SortOrder
  }

  export type detail_diagnosaMinOrderByAggregateInput = {
    id?: SortOrder
    diagnosa_id?: SortOrder
    gejala_id?: SortOrder
    cf_pakar?: SortOrder
    cf_user?: SortOrder
    cf_combined?: SortOrder
  }

  export type detail_diagnosaSumOrderByAggregateInput = {
    id?: SortOrder
    diagnosa_id?: SortOrder
    cf_pakar?: SortOrder
    cf_user?: SortOrder
    cf_combined?: SortOrder
  }

  export type childsCreateNestedManyWithoutUsersInput = {
    create?: XOR<childsCreateWithoutUsersInput, childsUncheckedCreateWithoutUsersInput> | childsCreateWithoutUsersInput[] | childsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: childsCreateOrConnectWithoutUsersInput | childsCreateOrConnectWithoutUsersInput[]
    createMany?: childsCreateManyUsersInputEnvelope
    connect?: childsWhereUniqueInput | childsWhereUniqueInput[]
  }

  export type childsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<childsCreateWithoutUsersInput, childsUncheckedCreateWithoutUsersInput> | childsCreateWithoutUsersInput[] | childsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: childsCreateOrConnectWithoutUsersInput | childsCreateOrConnectWithoutUsersInput[]
    createMany?: childsCreateManyUsersInputEnvelope
    connect?: childsWhereUniqueInput | childsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type childsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<childsCreateWithoutUsersInput, childsUncheckedCreateWithoutUsersInput> | childsCreateWithoutUsersInput[] | childsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: childsCreateOrConnectWithoutUsersInput | childsCreateOrConnectWithoutUsersInput[]
    upsert?: childsUpsertWithWhereUniqueWithoutUsersInput | childsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: childsCreateManyUsersInputEnvelope
    set?: childsWhereUniqueInput | childsWhereUniqueInput[]
    disconnect?: childsWhereUniqueInput | childsWhereUniqueInput[]
    delete?: childsWhereUniqueInput | childsWhereUniqueInput[]
    connect?: childsWhereUniqueInput | childsWhereUniqueInput[]
    update?: childsUpdateWithWhereUniqueWithoutUsersInput | childsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: childsUpdateManyWithWhereWithoutUsersInput | childsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: childsScalarWhereInput | childsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type childsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<childsCreateWithoutUsersInput, childsUncheckedCreateWithoutUsersInput> | childsCreateWithoutUsersInput[] | childsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: childsCreateOrConnectWithoutUsersInput | childsCreateOrConnectWithoutUsersInput[]
    upsert?: childsUpsertWithWhereUniqueWithoutUsersInput | childsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: childsCreateManyUsersInputEnvelope
    set?: childsWhereUniqueInput | childsWhereUniqueInput[]
    disconnect?: childsWhereUniqueInput | childsWhereUniqueInput[]
    delete?: childsWhereUniqueInput | childsWhereUniqueInput[]
    connect?: childsWhereUniqueInput | childsWhereUniqueInput[]
    update?: childsUpdateWithWhereUniqueWithoutUsersInput | childsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: childsUpdateManyWithWhereWithoutUsersInput | childsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: childsScalarWhereInput | childsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutChildsInput = {
    create?: XOR<usersCreateWithoutChildsInput, usersUncheckedCreateWithoutChildsInput>
    connectOrCreate?: usersCreateOrConnectWithoutChildsInput
    connect?: usersWhereUniqueInput
  }

  export type diagnosaCreateNestedManyWithoutChildsInput = {
    create?: XOR<diagnosaCreateWithoutChildsInput, diagnosaUncheckedCreateWithoutChildsInput> | diagnosaCreateWithoutChildsInput[] | diagnosaUncheckedCreateWithoutChildsInput[]
    connectOrCreate?: diagnosaCreateOrConnectWithoutChildsInput | diagnosaCreateOrConnectWithoutChildsInput[]
    createMany?: diagnosaCreateManyChildsInputEnvelope
    connect?: diagnosaWhereUniqueInput | diagnosaWhereUniqueInput[]
  }

  export type diagnosaUncheckedCreateNestedManyWithoutChildsInput = {
    create?: XOR<diagnosaCreateWithoutChildsInput, diagnosaUncheckedCreateWithoutChildsInput> | diagnosaCreateWithoutChildsInput[] | diagnosaUncheckedCreateWithoutChildsInput[]
    connectOrCreate?: diagnosaCreateOrConnectWithoutChildsInput | diagnosaCreateOrConnectWithoutChildsInput[]
    createMany?: diagnosaCreateManyChildsInputEnvelope
    connect?: diagnosaWhereUniqueInput | diagnosaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneWithoutChildsNestedInput = {
    create?: XOR<usersCreateWithoutChildsInput, usersUncheckedCreateWithoutChildsInput>
    connectOrCreate?: usersCreateOrConnectWithoutChildsInput
    upsert?: usersUpsertWithoutChildsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChildsInput, usersUpdateWithoutChildsInput>, usersUncheckedUpdateWithoutChildsInput>
  }

  export type diagnosaUpdateManyWithoutChildsNestedInput = {
    create?: XOR<diagnosaCreateWithoutChildsInput, diagnosaUncheckedCreateWithoutChildsInput> | diagnosaCreateWithoutChildsInput[] | diagnosaUncheckedCreateWithoutChildsInput[]
    connectOrCreate?: diagnosaCreateOrConnectWithoutChildsInput | diagnosaCreateOrConnectWithoutChildsInput[]
    upsert?: diagnosaUpsertWithWhereUniqueWithoutChildsInput | diagnosaUpsertWithWhereUniqueWithoutChildsInput[]
    createMany?: diagnosaCreateManyChildsInputEnvelope
    set?: diagnosaWhereUniqueInput | diagnosaWhereUniqueInput[]
    disconnect?: diagnosaWhereUniqueInput | diagnosaWhereUniqueInput[]
    delete?: diagnosaWhereUniqueInput | diagnosaWhereUniqueInput[]
    connect?: diagnosaWhereUniqueInput | diagnosaWhereUniqueInput[]
    update?: diagnosaUpdateWithWhereUniqueWithoutChildsInput | diagnosaUpdateWithWhereUniqueWithoutChildsInput[]
    updateMany?: diagnosaUpdateManyWithWhereWithoutChildsInput | diagnosaUpdateManyWithWhereWithoutChildsInput[]
    deleteMany?: diagnosaScalarWhereInput | diagnosaScalarWhereInput[]
  }

  export type diagnosaUncheckedUpdateManyWithoutChildsNestedInput = {
    create?: XOR<diagnosaCreateWithoutChildsInput, diagnosaUncheckedCreateWithoutChildsInput> | diagnosaCreateWithoutChildsInput[] | diagnosaUncheckedCreateWithoutChildsInput[]
    connectOrCreate?: diagnosaCreateOrConnectWithoutChildsInput | diagnosaCreateOrConnectWithoutChildsInput[]
    upsert?: diagnosaUpsertWithWhereUniqueWithoutChildsInput | diagnosaUpsertWithWhereUniqueWithoutChildsInput[]
    createMany?: diagnosaCreateManyChildsInputEnvelope
    set?: diagnosaWhereUniqueInput | diagnosaWhereUniqueInput[]
    disconnect?: diagnosaWhereUniqueInput | diagnosaWhereUniqueInput[]
    delete?: diagnosaWhereUniqueInput | diagnosaWhereUniqueInput[]
    connect?: diagnosaWhereUniqueInput | diagnosaWhereUniqueInput[]
    update?: diagnosaUpdateWithWhereUniqueWithoutChildsInput | diagnosaUpdateWithWhereUniqueWithoutChildsInput[]
    updateMany?: diagnosaUpdateManyWithWhereWithoutChildsInput | diagnosaUpdateManyWithWhereWithoutChildsInput[]
    deleteMany?: diagnosaScalarWhereInput | diagnosaScalarWhereInput[]
  }

  export type detail_diagnosaCreateNestedManyWithoutGejalaInput = {
    create?: XOR<detail_diagnosaCreateWithoutGejalaInput, detail_diagnosaUncheckedCreateWithoutGejalaInput> | detail_diagnosaCreateWithoutGejalaInput[] | detail_diagnosaUncheckedCreateWithoutGejalaInput[]
    connectOrCreate?: detail_diagnosaCreateOrConnectWithoutGejalaInput | detail_diagnosaCreateOrConnectWithoutGejalaInput[]
    createMany?: detail_diagnosaCreateManyGejalaInputEnvelope
    connect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
  }

  export type detail_diagnosaUncheckedCreateNestedManyWithoutGejalaInput = {
    create?: XOR<detail_diagnosaCreateWithoutGejalaInput, detail_diagnosaUncheckedCreateWithoutGejalaInput> | detail_diagnosaCreateWithoutGejalaInput[] | detail_diagnosaUncheckedCreateWithoutGejalaInput[]
    connectOrCreate?: detail_diagnosaCreateOrConnectWithoutGejalaInput | detail_diagnosaCreateOrConnectWithoutGejalaInput[]
    createMany?: detail_diagnosaCreateManyGejalaInputEnvelope
    connect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type detail_diagnosaUpdateManyWithoutGejalaNestedInput = {
    create?: XOR<detail_diagnosaCreateWithoutGejalaInput, detail_diagnosaUncheckedCreateWithoutGejalaInput> | detail_diagnosaCreateWithoutGejalaInput[] | detail_diagnosaUncheckedCreateWithoutGejalaInput[]
    connectOrCreate?: detail_diagnosaCreateOrConnectWithoutGejalaInput | detail_diagnosaCreateOrConnectWithoutGejalaInput[]
    upsert?: detail_diagnosaUpsertWithWhereUniqueWithoutGejalaInput | detail_diagnosaUpsertWithWhereUniqueWithoutGejalaInput[]
    createMany?: detail_diagnosaCreateManyGejalaInputEnvelope
    set?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    disconnect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    delete?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    connect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    update?: detail_diagnosaUpdateWithWhereUniqueWithoutGejalaInput | detail_diagnosaUpdateWithWhereUniqueWithoutGejalaInput[]
    updateMany?: detail_diagnosaUpdateManyWithWhereWithoutGejalaInput | detail_diagnosaUpdateManyWithWhereWithoutGejalaInput[]
    deleteMany?: detail_diagnosaScalarWhereInput | detail_diagnosaScalarWhereInput[]
  }

  export type detail_diagnosaUncheckedUpdateManyWithoutGejalaNestedInput = {
    create?: XOR<detail_diagnosaCreateWithoutGejalaInput, detail_diagnosaUncheckedCreateWithoutGejalaInput> | detail_diagnosaCreateWithoutGejalaInput[] | detail_diagnosaUncheckedCreateWithoutGejalaInput[]
    connectOrCreate?: detail_diagnosaCreateOrConnectWithoutGejalaInput | detail_diagnosaCreateOrConnectWithoutGejalaInput[]
    upsert?: detail_diagnosaUpsertWithWhereUniqueWithoutGejalaInput | detail_diagnosaUpsertWithWhereUniqueWithoutGejalaInput[]
    createMany?: detail_diagnosaCreateManyGejalaInputEnvelope
    set?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    disconnect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    delete?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    connect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    update?: detail_diagnosaUpdateWithWhereUniqueWithoutGejalaInput | detail_diagnosaUpdateWithWhereUniqueWithoutGejalaInput[]
    updateMany?: detail_diagnosaUpdateManyWithWhereWithoutGejalaInput | detail_diagnosaUpdateManyWithWhereWithoutGejalaInput[]
    deleteMany?: detail_diagnosaScalarWhereInput | detail_diagnosaScalarWhereInput[]
  }

  export type childsCreateNestedOneWithoutDiagnosaInput = {
    create?: XOR<childsCreateWithoutDiagnosaInput, childsUncheckedCreateWithoutDiagnosaInput>
    connectOrCreate?: childsCreateOrConnectWithoutDiagnosaInput
    connect?: childsWhereUniqueInput
  }

  export type detail_diagnosaCreateNestedManyWithoutDiagnosaInput = {
    create?: XOR<detail_diagnosaCreateWithoutDiagnosaInput, detail_diagnosaUncheckedCreateWithoutDiagnosaInput> | detail_diagnosaCreateWithoutDiagnosaInput[] | detail_diagnosaUncheckedCreateWithoutDiagnosaInput[]
    connectOrCreate?: detail_diagnosaCreateOrConnectWithoutDiagnosaInput | detail_diagnosaCreateOrConnectWithoutDiagnosaInput[]
    createMany?: detail_diagnosaCreateManyDiagnosaInputEnvelope
    connect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
  }

  export type detail_diagnosaUncheckedCreateNestedManyWithoutDiagnosaInput = {
    create?: XOR<detail_diagnosaCreateWithoutDiagnosaInput, detail_diagnosaUncheckedCreateWithoutDiagnosaInput> | detail_diagnosaCreateWithoutDiagnosaInput[] | detail_diagnosaUncheckedCreateWithoutDiagnosaInput[]
    connectOrCreate?: detail_diagnosaCreateOrConnectWithoutDiagnosaInput | detail_diagnosaCreateOrConnectWithoutDiagnosaInput[]
    createMany?: detail_diagnosaCreateManyDiagnosaInputEnvelope
    connect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
  }

  export type childsUpdateOneWithoutDiagnosaNestedInput = {
    create?: XOR<childsCreateWithoutDiagnosaInput, childsUncheckedCreateWithoutDiagnosaInput>
    connectOrCreate?: childsCreateOrConnectWithoutDiagnosaInput
    upsert?: childsUpsertWithoutDiagnosaInput
    disconnect?: childsWhereInput | boolean
    delete?: childsWhereInput | boolean
    connect?: childsWhereUniqueInput
    update?: XOR<XOR<childsUpdateToOneWithWhereWithoutDiagnosaInput, childsUpdateWithoutDiagnosaInput>, childsUncheckedUpdateWithoutDiagnosaInput>
  }

  export type detail_diagnosaUpdateManyWithoutDiagnosaNestedInput = {
    create?: XOR<detail_diagnosaCreateWithoutDiagnosaInput, detail_diagnosaUncheckedCreateWithoutDiagnosaInput> | detail_diagnosaCreateWithoutDiagnosaInput[] | detail_diagnosaUncheckedCreateWithoutDiagnosaInput[]
    connectOrCreate?: detail_diagnosaCreateOrConnectWithoutDiagnosaInput | detail_diagnosaCreateOrConnectWithoutDiagnosaInput[]
    upsert?: detail_diagnosaUpsertWithWhereUniqueWithoutDiagnosaInput | detail_diagnosaUpsertWithWhereUniqueWithoutDiagnosaInput[]
    createMany?: detail_diagnosaCreateManyDiagnosaInputEnvelope
    set?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    disconnect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    delete?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    connect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    update?: detail_diagnosaUpdateWithWhereUniqueWithoutDiagnosaInput | detail_diagnosaUpdateWithWhereUniqueWithoutDiagnosaInput[]
    updateMany?: detail_diagnosaUpdateManyWithWhereWithoutDiagnosaInput | detail_diagnosaUpdateManyWithWhereWithoutDiagnosaInput[]
    deleteMany?: detail_diagnosaScalarWhereInput | detail_diagnosaScalarWhereInput[]
  }

  export type detail_diagnosaUncheckedUpdateManyWithoutDiagnosaNestedInput = {
    create?: XOR<detail_diagnosaCreateWithoutDiagnosaInput, detail_diagnosaUncheckedCreateWithoutDiagnosaInput> | detail_diagnosaCreateWithoutDiagnosaInput[] | detail_diagnosaUncheckedCreateWithoutDiagnosaInput[]
    connectOrCreate?: detail_diagnosaCreateOrConnectWithoutDiagnosaInput | detail_diagnosaCreateOrConnectWithoutDiagnosaInput[]
    upsert?: detail_diagnosaUpsertWithWhereUniqueWithoutDiagnosaInput | detail_diagnosaUpsertWithWhereUniqueWithoutDiagnosaInput[]
    createMany?: detail_diagnosaCreateManyDiagnosaInputEnvelope
    set?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    disconnect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    delete?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    connect?: detail_diagnosaWhereUniqueInput | detail_diagnosaWhereUniqueInput[]
    update?: detail_diagnosaUpdateWithWhereUniqueWithoutDiagnosaInput | detail_diagnosaUpdateWithWhereUniqueWithoutDiagnosaInput[]
    updateMany?: detail_diagnosaUpdateManyWithWhereWithoutDiagnosaInput | detail_diagnosaUpdateManyWithWhereWithoutDiagnosaInput[]
    deleteMany?: detail_diagnosaScalarWhereInput | detail_diagnosaScalarWhereInput[]
  }

  export type diagnosaCreateNestedOneWithoutDetailDiagnosaInput = {
    create?: XOR<diagnosaCreateWithoutDetailDiagnosaInput, diagnosaUncheckedCreateWithoutDetailDiagnosaInput>
    connectOrCreate?: diagnosaCreateOrConnectWithoutDetailDiagnosaInput
    connect?: diagnosaWhereUniqueInput
  }

  export type gejalaCreateNestedOneWithoutDetailDiagnosaInput = {
    create?: XOR<gejalaCreateWithoutDetailDiagnosaInput, gejalaUncheckedCreateWithoutDetailDiagnosaInput>
    connectOrCreate?: gejalaCreateOrConnectWithoutDetailDiagnosaInput
    connect?: gejalaWhereUniqueInput
  }

  export type diagnosaUpdateOneRequiredWithoutDetailDiagnosaNestedInput = {
    create?: XOR<diagnosaCreateWithoutDetailDiagnosaInput, diagnosaUncheckedCreateWithoutDetailDiagnosaInput>
    connectOrCreate?: diagnosaCreateOrConnectWithoutDetailDiagnosaInput
    upsert?: diagnosaUpsertWithoutDetailDiagnosaInput
    connect?: diagnosaWhereUniqueInput
    update?: XOR<XOR<diagnosaUpdateToOneWithWhereWithoutDetailDiagnosaInput, diagnosaUpdateWithoutDetailDiagnosaInput>, diagnosaUncheckedUpdateWithoutDetailDiagnosaInput>
  }

  export type gejalaUpdateOneRequiredWithoutDetailDiagnosaNestedInput = {
    create?: XOR<gejalaCreateWithoutDetailDiagnosaInput, gejalaUncheckedCreateWithoutDetailDiagnosaInput>
    connectOrCreate?: gejalaCreateOrConnectWithoutDetailDiagnosaInput
    upsert?: gejalaUpsertWithoutDetailDiagnosaInput
    connect?: gejalaWhereUniqueInput
    update?: XOR<XOR<gejalaUpdateToOneWithWhereWithoutDetailDiagnosaInput, gejalaUpdateWithoutDetailDiagnosaInput>, gejalaUncheckedUpdateWithoutDetailDiagnosaInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type childsCreateWithoutUsersInput = {
    nama_anak: string
    tanggal_lahir: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Diagnosa?: diagnosaCreateNestedManyWithoutChildsInput
  }

  export type childsUncheckedCreateWithoutUsersInput = {
    id?: number
    nama_anak: string
    tanggal_lahir: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Diagnosa?: diagnosaUncheckedCreateNestedManyWithoutChildsInput
  }

  export type childsCreateOrConnectWithoutUsersInput = {
    where: childsWhereUniqueInput
    create: XOR<childsCreateWithoutUsersInput, childsUncheckedCreateWithoutUsersInput>
  }

  export type childsCreateManyUsersInputEnvelope = {
    data: childsCreateManyUsersInput | childsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type childsUpsertWithWhereUniqueWithoutUsersInput = {
    where: childsWhereUniqueInput
    update: XOR<childsUpdateWithoutUsersInput, childsUncheckedUpdateWithoutUsersInput>
    create: XOR<childsCreateWithoutUsersInput, childsUncheckedCreateWithoutUsersInput>
  }

  export type childsUpdateWithWhereUniqueWithoutUsersInput = {
    where: childsWhereUniqueInput
    data: XOR<childsUpdateWithoutUsersInput, childsUncheckedUpdateWithoutUsersInput>
  }

  export type childsUpdateManyWithWhereWithoutUsersInput = {
    where: childsScalarWhereInput
    data: XOR<childsUpdateManyMutationInput, childsUncheckedUpdateManyWithoutUsersInput>
  }

  export type childsScalarWhereInput = {
    AND?: childsScalarWhereInput | childsScalarWhereInput[]
    OR?: childsScalarWhereInput[]
    NOT?: childsScalarWhereInput | childsScalarWhereInput[]
    id?: IntFilter<"childs"> | number
    user_id?: IntFilter<"childs"> | number
    nama_anak?: StringFilter<"childs"> | string
    tanggal_lahir?: DateTimeFilter<"childs"> | Date | string
    createdAt?: DateTimeFilter<"childs"> | Date | string
    updatedAt?: DateTimeFilter<"childs"> | Date | string
  }

  export type usersCreateWithoutChildsInput = {
    name: string
    email: string
    password: string
    role: string
  }

  export type usersUncheckedCreateWithoutChildsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
  }

  export type usersCreateOrConnectWithoutChildsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChildsInput, usersUncheckedCreateWithoutChildsInput>
  }

  export type diagnosaCreateWithoutChildsInput = {
    cf_result?: number
    cf_result_percentage?: number
    created_at?: Date | string
    DetailDiagnosa?: detail_diagnosaCreateNestedManyWithoutDiagnosaInput
  }

  export type diagnosaUncheckedCreateWithoutChildsInput = {
    id?: number
    cf_result?: number
    cf_result_percentage?: number
    created_at?: Date | string
    DetailDiagnosa?: detail_diagnosaUncheckedCreateNestedManyWithoutDiagnosaInput
  }

  export type diagnosaCreateOrConnectWithoutChildsInput = {
    where: diagnosaWhereUniqueInput
    create: XOR<diagnosaCreateWithoutChildsInput, diagnosaUncheckedCreateWithoutChildsInput>
  }

  export type diagnosaCreateManyChildsInputEnvelope = {
    data: diagnosaCreateManyChildsInput | diagnosaCreateManyChildsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutChildsInput = {
    update: XOR<usersUpdateWithoutChildsInput, usersUncheckedUpdateWithoutChildsInput>
    create: XOR<usersCreateWithoutChildsInput, usersUncheckedCreateWithoutChildsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChildsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChildsInput, usersUncheckedUpdateWithoutChildsInput>
  }

  export type usersUpdateWithoutChildsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateWithoutChildsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type diagnosaUpsertWithWhereUniqueWithoutChildsInput = {
    where: diagnosaWhereUniqueInput
    update: XOR<diagnosaUpdateWithoutChildsInput, diagnosaUncheckedUpdateWithoutChildsInput>
    create: XOR<diagnosaCreateWithoutChildsInput, diagnosaUncheckedCreateWithoutChildsInput>
  }

  export type diagnosaUpdateWithWhereUniqueWithoutChildsInput = {
    where: diagnosaWhereUniqueInput
    data: XOR<diagnosaUpdateWithoutChildsInput, diagnosaUncheckedUpdateWithoutChildsInput>
  }

  export type diagnosaUpdateManyWithWhereWithoutChildsInput = {
    where: diagnosaScalarWhereInput
    data: XOR<diagnosaUpdateManyMutationInput, diagnosaUncheckedUpdateManyWithoutChildsInput>
  }

  export type diagnosaScalarWhereInput = {
    AND?: diagnosaScalarWhereInput | diagnosaScalarWhereInput[]
    OR?: diagnosaScalarWhereInput[]
    NOT?: diagnosaScalarWhereInput | diagnosaScalarWhereInput[]
    id?: IntFilter<"diagnosa"> | number
    child_id?: IntFilter<"diagnosa"> | number
    cf_result?: FloatFilter<"diagnosa"> | number
    cf_result_percentage?: FloatFilter<"diagnosa"> | number
    created_at?: DateTimeFilter<"diagnosa"> | Date | string
  }

  export type detail_diagnosaCreateWithoutGejalaInput = {
    cf_pakar: number
    cf_user: number
    cf_combined: number
    Diagnosa: diagnosaCreateNestedOneWithoutDetailDiagnosaInput
  }

  export type detail_diagnosaUncheckedCreateWithoutGejalaInput = {
    id?: number
    diagnosa_id: number
    cf_pakar: number
    cf_user: number
    cf_combined: number
  }

  export type detail_diagnosaCreateOrConnectWithoutGejalaInput = {
    where: detail_diagnosaWhereUniqueInput
    create: XOR<detail_diagnosaCreateWithoutGejalaInput, detail_diagnosaUncheckedCreateWithoutGejalaInput>
  }

  export type detail_diagnosaCreateManyGejalaInputEnvelope = {
    data: detail_diagnosaCreateManyGejalaInput | detail_diagnosaCreateManyGejalaInput[]
    skipDuplicates?: boolean
  }

  export type detail_diagnosaUpsertWithWhereUniqueWithoutGejalaInput = {
    where: detail_diagnosaWhereUniqueInput
    update: XOR<detail_diagnosaUpdateWithoutGejalaInput, detail_diagnosaUncheckedUpdateWithoutGejalaInput>
    create: XOR<detail_diagnosaCreateWithoutGejalaInput, detail_diagnosaUncheckedCreateWithoutGejalaInput>
  }

  export type detail_diagnosaUpdateWithWhereUniqueWithoutGejalaInput = {
    where: detail_diagnosaWhereUniqueInput
    data: XOR<detail_diagnosaUpdateWithoutGejalaInput, detail_diagnosaUncheckedUpdateWithoutGejalaInput>
  }

  export type detail_diagnosaUpdateManyWithWhereWithoutGejalaInput = {
    where: detail_diagnosaScalarWhereInput
    data: XOR<detail_diagnosaUpdateManyMutationInput, detail_diagnosaUncheckedUpdateManyWithoutGejalaInput>
  }

  export type detail_diagnosaScalarWhereInput = {
    AND?: detail_diagnosaScalarWhereInput | detail_diagnosaScalarWhereInput[]
    OR?: detail_diagnosaScalarWhereInput[]
    NOT?: detail_diagnosaScalarWhereInput | detail_diagnosaScalarWhereInput[]
    id?: IntFilter<"detail_diagnosa"> | number
    diagnosa_id?: IntFilter<"detail_diagnosa"> | number
    gejala_id?: StringFilter<"detail_diagnosa"> | string
    cf_pakar?: FloatFilter<"detail_diagnosa"> | number
    cf_user?: FloatFilter<"detail_diagnosa"> | number
    cf_combined?: FloatFilter<"detail_diagnosa"> | number
  }

  export type childsCreateWithoutDiagnosaInput = {
    nama_anak: string
    tanggal_lahir: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: usersCreateNestedOneWithoutChildsInput
  }

  export type childsUncheckedCreateWithoutDiagnosaInput = {
    id?: number
    user_id: number
    nama_anak: string
    tanggal_lahir: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type childsCreateOrConnectWithoutDiagnosaInput = {
    where: childsWhereUniqueInput
    create: XOR<childsCreateWithoutDiagnosaInput, childsUncheckedCreateWithoutDiagnosaInput>
  }

  export type detail_diagnosaCreateWithoutDiagnosaInput = {
    cf_pakar: number
    cf_user: number
    cf_combined: number
    Gejala: gejalaCreateNestedOneWithoutDetailDiagnosaInput
  }

  export type detail_diagnosaUncheckedCreateWithoutDiagnosaInput = {
    id?: number
    gejala_id: string
    cf_pakar: number
    cf_user: number
    cf_combined: number
  }

  export type detail_diagnosaCreateOrConnectWithoutDiagnosaInput = {
    where: detail_diagnosaWhereUniqueInput
    create: XOR<detail_diagnosaCreateWithoutDiagnosaInput, detail_diagnosaUncheckedCreateWithoutDiagnosaInput>
  }

  export type detail_diagnosaCreateManyDiagnosaInputEnvelope = {
    data: detail_diagnosaCreateManyDiagnosaInput | detail_diagnosaCreateManyDiagnosaInput[]
    skipDuplicates?: boolean
  }

  export type childsUpsertWithoutDiagnosaInput = {
    update: XOR<childsUpdateWithoutDiagnosaInput, childsUncheckedUpdateWithoutDiagnosaInput>
    create: XOR<childsCreateWithoutDiagnosaInput, childsUncheckedCreateWithoutDiagnosaInput>
    where?: childsWhereInput
  }

  export type childsUpdateToOneWithWhereWithoutDiagnosaInput = {
    where?: childsWhereInput
    data: XOR<childsUpdateWithoutDiagnosaInput, childsUncheckedUpdateWithoutDiagnosaInput>
  }

  export type childsUpdateWithoutDiagnosaInput = {
    nama_anak?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: usersUpdateOneWithoutChildsNestedInput
  }

  export type childsUncheckedUpdateWithoutDiagnosaInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    nama_anak?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_diagnosaUpsertWithWhereUniqueWithoutDiagnosaInput = {
    where: detail_diagnosaWhereUniqueInput
    update: XOR<detail_diagnosaUpdateWithoutDiagnosaInput, detail_diagnosaUncheckedUpdateWithoutDiagnosaInput>
    create: XOR<detail_diagnosaCreateWithoutDiagnosaInput, detail_diagnosaUncheckedCreateWithoutDiagnosaInput>
  }

  export type detail_diagnosaUpdateWithWhereUniqueWithoutDiagnosaInput = {
    where: detail_diagnosaWhereUniqueInput
    data: XOR<detail_diagnosaUpdateWithoutDiagnosaInput, detail_diagnosaUncheckedUpdateWithoutDiagnosaInput>
  }

  export type detail_diagnosaUpdateManyWithWhereWithoutDiagnosaInput = {
    where: detail_diagnosaScalarWhereInput
    data: XOR<detail_diagnosaUpdateManyMutationInput, detail_diagnosaUncheckedUpdateManyWithoutDiagnosaInput>
  }

  export type diagnosaCreateWithoutDetailDiagnosaInput = {
    cf_result?: number
    cf_result_percentage?: number
    created_at?: Date | string
    Childs?: childsCreateNestedOneWithoutDiagnosaInput
  }

  export type diagnosaUncheckedCreateWithoutDetailDiagnosaInput = {
    id?: number
    child_id: number
    cf_result?: number
    cf_result_percentage?: number
    created_at?: Date | string
  }

  export type diagnosaCreateOrConnectWithoutDetailDiagnosaInput = {
    where: diagnosaWhereUniqueInput
    create: XOR<diagnosaCreateWithoutDetailDiagnosaInput, diagnosaUncheckedCreateWithoutDetailDiagnosaInput>
  }

  export type gejalaCreateWithoutDetailDiagnosaInput = {
    gejala_id: string
    nama_gejala: string
    cf_pakar: number
    isDisabled?: boolean
  }

  export type gejalaUncheckedCreateWithoutDetailDiagnosaInput = {
    id?: number
    gejala_id: string
    nama_gejala: string
    cf_pakar: number
    isDisabled?: boolean
  }

  export type gejalaCreateOrConnectWithoutDetailDiagnosaInput = {
    where: gejalaWhereUniqueInput
    create: XOR<gejalaCreateWithoutDetailDiagnosaInput, gejalaUncheckedCreateWithoutDetailDiagnosaInput>
  }

  export type diagnosaUpsertWithoutDetailDiagnosaInput = {
    update: XOR<diagnosaUpdateWithoutDetailDiagnosaInput, diagnosaUncheckedUpdateWithoutDetailDiagnosaInput>
    create: XOR<diagnosaCreateWithoutDetailDiagnosaInput, diagnosaUncheckedCreateWithoutDetailDiagnosaInput>
    where?: diagnosaWhereInput
  }

  export type diagnosaUpdateToOneWithWhereWithoutDetailDiagnosaInput = {
    where?: diagnosaWhereInput
    data: XOR<diagnosaUpdateWithoutDetailDiagnosaInput, diagnosaUncheckedUpdateWithoutDetailDiagnosaInput>
  }

  export type diagnosaUpdateWithoutDetailDiagnosaInput = {
    cf_result?: FloatFieldUpdateOperationsInput | number
    cf_result_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Childs?: childsUpdateOneWithoutDiagnosaNestedInput
  }

  export type diagnosaUncheckedUpdateWithoutDetailDiagnosaInput = {
    id?: IntFieldUpdateOperationsInput | number
    child_id?: IntFieldUpdateOperationsInput | number
    cf_result?: FloatFieldUpdateOperationsInput | number
    cf_result_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gejalaUpsertWithoutDetailDiagnosaInput = {
    update: XOR<gejalaUpdateWithoutDetailDiagnosaInput, gejalaUncheckedUpdateWithoutDetailDiagnosaInput>
    create: XOR<gejalaCreateWithoutDetailDiagnosaInput, gejalaUncheckedCreateWithoutDetailDiagnosaInput>
    where?: gejalaWhereInput
  }

  export type gejalaUpdateToOneWithWhereWithoutDetailDiagnosaInput = {
    where?: gejalaWhereInput
    data: XOR<gejalaUpdateWithoutDetailDiagnosaInput, gejalaUncheckedUpdateWithoutDetailDiagnosaInput>
  }

  export type gejalaUpdateWithoutDetailDiagnosaInput = {
    gejala_id?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type gejalaUncheckedUpdateWithoutDetailDiagnosaInput = {
    id?: IntFieldUpdateOperationsInput | number
    gejala_id?: StringFieldUpdateOperationsInput | string
    nama_gejala?: StringFieldUpdateOperationsInput | string
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type childsCreateManyUsersInput = {
    id?: number
    nama_anak: string
    tanggal_lahir: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type childsUpdateWithoutUsersInput = {
    nama_anak?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Diagnosa?: diagnosaUpdateManyWithoutChildsNestedInput
  }

  export type childsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_anak?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Diagnosa?: diagnosaUncheckedUpdateManyWithoutChildsNestedInput
  }

  export type childsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_anak?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diagnosaCreateManyChildsInput = {
    id?: number
    cf_result?: number
    cf_result_percentage?: number
    created_at?: Date | string
  }

  export type diagnosaUpdateWithoutChildsInput = {
    cf_result?: FloatFieldUpdateOperationsInput | number
    cf_result_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    DetailDiagnosa?: detail_diagnosaUpdateManyWithoutDiagnosaNestedInput
  }

  export type diagnosaUncheckedUpdateWithoutChildsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cf_result?: FloatFieldUpdateOperationsInput | number
    cf_result_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    DetailDiagnosa?: detail_diagnosaUncheckedUpdateManyWithoutDiagnosaNestedInput
  }

  export type diagnosaUncheckedUpdateManyWithoutChildsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cf_result?: FloatFieldUpdateOperationsInput | number
    cf_result_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_diagnosaCreateManyGejalaInput = {
    id?: number
    diagnosa_id: number
    cf_pakar: number
    cf_user: number
    cf_combined: number
  }

  export type detail_diagnosaUpdateWithoutGejalaInput = {
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    cf_user?: FloatFieldUpdateOperationsInput | number
    cf_combined?: FloatFieldUpdateOperationsInput | number
    Diagnosa?: diagnosaUpdateOneRequiredWithoutDetailDiagnosaNestedInput
  }

  export type detail_diagnosaUncheckedUpdateWithoutGejalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosa_id?: IntFieldUpdateOperationsInput | number
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    cf_user?: FloatFieldUpdateOperationsInput | number
    cf_combined?: FloatFieldUpdateOperationsInput | number
  }

  export type detail_diagnosaUncheckedUpdateManyWithoutGejalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosa_id?: IntFieldUpdateOperationsInput | number
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    cf_user?: FloatFieldUpdateOperationsInput | number
    cf_combined?: FloatFieldUpdateOperationsInput | number
  }

  export type detail_diagnosaCreateManyDiagnosaInput = {
    id?: number
    gejala_id: string
    cf_pakar: number
    cf_user: number
    cf_combined: number
  }

  export type detail_diagnosaUpdateWithoutDiagnosaInput = {
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    cf_user?: FloatFieldUpdateOperationsInput | number
    cf_combined?: FloatFieldUpdateOperationsInput | number
    Gejala?: gejalaUpdateOneRequiredWithoutDetailDiagnosaNestedInput
  }

  export type detail_diagnosaUncheckedUpdateWithoutDiagnosaInput = {
    id?: IntFieldUpdateOperationsInput | number
    gejala_id?: StringFieldUpdateOperationsInput | string
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    cf_user?: FloatFieldUpdateOperationsInput | number
    cf_combined?: FloatFieldUpdateOperationsInput | number
  }

  export type detail_diagnosaUncheckedUpdateManyWithoutDiagnosaInput = {
    id?: IntFieldUpdateOperationsInput | number
    gejala_id?: StringFieldUpdateOperationsInput | string
    cf_pakar?: FloatFieldUpdateOperationsInput | number
    cf_user?: FloatFieldUpdateOperationsInput | number
    cf_combined?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}